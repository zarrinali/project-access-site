const express = require('express');
const router = express.Router();
const airtable = require('airtable');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mailing = require('../mailing');
const crypto = require('crypto-random-string');
const { makeVerificationToken } = require('./verificationControllers');

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
 * @return {object}
 */
function redirectIfLoggedIn(req, res) {
  if (req.cookies._uid) {
    return res.send(true);
  }
  return res.send(false);
}

/**
 * For resources that require authorization
 * @param {object} req
 * @param {object} res
 * @return {object}
 */
function loginRequired(req, res) {
  if (req.cookies._uid) {
    next();
  }
  return res.status(401).json({
    message: 'Unauthorized access to the requested resources.',
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
    subject: 'Please verify your email - Project Access Austria',
    text: `Please verify your email at http://${baseUrl}/confirm/${token}`,
    html: `<b>Please verify your email at http://${baseUrl}/confirm/${token}</b>`,
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

// TODO: coordinate with frontend on how to work with this
router.get('/isLoggedIn', function (req, res) {
  if (req.cookies._uid) {
    return res.status(200).send(true);
  }
  return res.status(200).send(false);
});

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
        {
          email: req.body.user.email,
          password: hashPassword,
        },
        async function (err, records) {
          if (err) {
            return res.status(400).json({
              message: err,
            });
          }

          const baseUrl = req.headers.host;

          await sendVerificationEmail(baseUrl, records.fields);

          // Make password undefined before sending back to client
          records.fields.password = undefined;
          return res.status(201).json({
            results: true,
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

// TODO: coordinate with frontend on how to work with this
router.get('/login', redirectIfLoggedIn, function (req, res) {
  return res.status(200).end();
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
        const token = jwt.sign(
          {
            email: user.email,
            _id: user.recordId,
          },
          process.env.SECRET_ACCESS_TOKEN,
          {
            algorithm: 'HS256',
            expiresIn: process.env.JWT_EXPIRY_SECONDS + 's',
          }
        );

        // Give the user a token to authenticate
        res.cookie('authorization', token, {
          httpOnly: true,
          maxAge: process.env.JWT_EXPIRY_SECONDS * 1000,
        });

        return res.status(200).json({
          results: true,
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
    return next(err);
  }
});

router.get('/logout', function (req, res, next) {
  try {
    res.clearCookie('authorization');
    res.clearCookie('_uid');
    res.redirect('/');
  } catch (err) {
    return next(err);
  }
});

module.exports = {
  loginRequired,
  // redirectIfLoggedIn,
  router,
};
