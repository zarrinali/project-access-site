const express = require('express');
const router = express.Router();
const airtable = require('airtable');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mailing = require('../mailing');
const crypto = require('crypto-random-string');
const {
  makeVerificationToken
} = require('./verificationControllers');

// Configure Airtable with the API key and Base key
airtable.configure({
  apiKey: process.env.TOKEN,
  endpointUrl: 'https://api.airtable.com',
});
const base = airtable.base(process.env.DATABASE);

/**
 * For resources that require authorization
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
function redirectIfLoggedIn(req, res, next) {
  if (req.user) {
    return res.redirect('/');
  }
  return next();
}

/**
 * For resources that require authorization
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function loginRequired(req, res) {
  if (req.user) {
    next();
  }
  return res.status(401).json({
    message: 'Unauthorized user!',
  });
}

/**
 * Send verification email after a user registers
 * @param {String} baseUrl
 * @param {object} user
 * @return {object}
 */
async function sendVerificationEmail(baseUrl, user) {
  const token = await makeVerificationToken(user.recordId);

  const mailBody = {
    email: user.email,
    text: `Please verify your email at http://${baseUrl}/auth/verification/${token}`,
    html: `<b>Please verify your email at http://${baseUrl}/auth/verification/${token}</b>`,
  };

  mailing.sendEmail(mailBody);
  return 'Verification email sent!';
}

/**
 * Find user that matches the email provided
 * @param {object} req
 */
async function findMatchUser(req) {
  // Filter the DB with provided email and take out the user
  const user = await base('Persons')
    .select({
      maxRecords: 1,
      view: 'Grid view',
      filterByFormula: `{email} = "${req.body.user.email}"`,
    })
    .all();

  return user;
}

/**
 * Send email and password to DB for registration
 */
router.post('/signup', async function (req, res, next) {
  try {
    const matchUser = await findMatchUser(req, next);

    if (matchUser.length == 0) {
      // Hash user's password before adding to DB
      const hashPassword = bcrypt.hashSync(req.body.user.password, saltRounds);

      // Create a new user in DB
      base('Persons').create(
        [{
          fields: {
            email: req.body.user.email,
            password: hashPassword,
          },
        }, ],
        async function (err, records) {
          if (err) {
            return res.status(400).json({
              message: err,
            });
          }

          const baseUrl = req.headers.host;

          await sendVerificationEmail(baseUrl, records[0].fields);

          // Make password undefined before sending back to client
          records[0].fields.password = undefined;
          return res.status(201).json({
            user: records[0].fields,
            message: 'Registration successful!',
          });
        }
      );
    } else {
      return res.status(409).json({
        message: 'This email is already registered.',
      });
    }
  } catch (err) {
    return next(err);
  }
});

/**
 * Fetch email and password from DB
 * and compare with user-provided email and password to authenticate
 */
router.post('/login', async function (req, res, next) {
  try {
    const matchUser = await findMatchUser(req);

    if (matchUser.length > 0) {
      const user = matchUser[0].fields;

      // Compare user's password and the password in DB
      if (bcrypt.compareSync(req.body.user.password, user.password)) {
        const token = jwt.sign({
            email: user.email,
            _id: user.recordId,
          },
          process.env.SECRET_ACCESS_TOKEN, {
            algorithm: 'HS256',
            expiresIn: '28800s',
          }
        );

        res.cookie('token', token, {
          httpOnly: true,
        });

        // Give the user a token to authenticate
        return res.json({
          token: token,
          message: 'Login successful!',
        });
      } else {
        return res.status(401).json({
          message: 'Authorization failed. Wrong password.',
        });
      }
    } else {
      return res.status(401).json({
        message: 'Authorization failed. User not found.',
      });
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

module.exports = {
  loginRequired,
  redirectIfLoggedIn,
  router
};