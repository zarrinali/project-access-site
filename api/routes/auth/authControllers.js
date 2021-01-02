const express = require('express');
const router = express.Router();
const base = require('../airtable');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mailing = require('../mailing');
const {
  makeVerificationToken
} = require('./verificationControllers');

/**
 * For resources that require authorization
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @return {object}
 */
function loginRequired(req, res, next) {
  if (req._uid) {
    return next();
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
  const token = await makeVerificationToken(user.PersonID);

  const mailBody = {
    email: user.PersonEmail,
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
      filterByFormula: `{PersonEmail} = "${req.body.user.email}"`,
    })
    .all();

  return user;
}

/**
 * Check if the user is logged in
 * @return {boolean}
 */
router.get('/isLoggedIn', function (req, res) {
  if (req._uid) {
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
      base('Persons').create({
          PersonEmail: req.body.user.email,
          PersonPassword: hashPassword,
          PersonFirstName: req.body.user.firstName,
          PersonLastName: req.body.user.lastName,
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
          records.fields.PersonPassword = undefined;
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

/**
 * Fetch email and password from DB
 * and compare with user-provided email and password to authenticate
 */
router.post('/login', async function (req, res, next) {
  try {
    const matchUser = await findMatchUser(req);

    if (matchUser.length > 0) {
      const user = matchUser[0].fields;

      if (!user.PersonVerified) {
        return res.status(401).json({
          message: "User's email has not been verified. Please verify your email.",
        });
      }

      // Compare user's password and the password in DB
      if (bcrypt.compareSync(req.body.user.password, user.PersonPassword)) {
        const token = jwt.sign({
            _id: user.PersonID,
            email: user.PersonEmail,
          },
          process.env.SECRET_ACCESS_TOKEN, {
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

/**
 * Clear user's authentication token
 */
router.get('/logout', function (req, res, next) {
  try {
    res.clearCookie('authorization');
    res.clearCookie('_uid');
    return res.status(200).json({
      message: 'Logout successfully.',
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = {
  loginRequired,
  router,
};