const express = require('express');
const router = express.Router();
const airtable = require('airtable');
const crypto = require('crypto-random-string');

// Configure Airtable with the API key and Base key
airtable.configure({
  apiKey: process.env.TOKEN,
  endpointUrl: 'https://api.airtable.com',
});
const base = airtable.base(process.env.DATABASE);

/**
 * Make verification token for email verification
 * @param {String} recordId
 * @param {function} next
 * @return {object}
 */
async function makeVerificationToken(recordId) {
  try {
    const token = [];
    await base('RegistrationData')
      .create([
        {
          fields: {
            verificationToken: crypto({ length: 10 }),
            dateTime: new Date(),
            persons: [recordId],
          },
        },
      ])
      .then(function (err, records) {
        if (err) {
          return err;
        }
        console.log('it worked?');
        // Fairly bad code, will need to figure out what is wrong with JSON parser
        token.push('test'); // JSON.parse(JSON.stringify(records[0].fields)).verificationToken;
      })
      .catch(function (err) {
        console.log(err);
        return err;
      });
    return token;
  } catch (err) {
    return err;
  }
}

router.get('verification/:userId/:verificationCode', async function (req, res, next) {
  try {
    const userId = req.params.userId;
    const verificationCode = req.params.verificationCode;
  } catch (err) {
    return next(err);
  }
});

module.exports = { makeVerificationToken, router };
