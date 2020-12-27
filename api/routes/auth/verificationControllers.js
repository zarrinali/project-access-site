const express = require('express');
const router = express.Router();
const airtable = require('airtable');
const crypto = require('crypto-random-string');
const cryptoLength = 10;
const authControllers = require('./authControllers');

// Configure Airtable with the API key and Base key
airtable.configure({
  apiKey: process.env.TOKEN,
  endpointUrl: 'https://api.airtable.com',
});
const base = airtable.base(process.env.DATABASE);

/**
 * Make verification token for email verification
 * @param {String} recordId
 * @return {object}
 */
async function makeVerificationToken(recordId) {
  const data = await base('RegistrationData').create([
    {
      fields: {
        verificationToken:
          recordId +
          crypto({
            length: cryptoLength,
          }),
        dateTime: new Date(),
        persons: [recordId],
      },
    },
  ]);
  return data[0].fields.verificationToken;
}

router.get('/verification/:verificationToken', async function (req, res, next) {
  try {
    const token = req.params.verificationToken;

    const recordId = token.substring(0, token.length - cryptoLength);

    const userByToken = await base('RegistrationData')
      .select({
        maxRecords: 1,
        view: 'Grid view',
        filterByFormula: `{verificationToken} = "${token}"`,
      })
      .all();

    if (userByToken.length == 0) {
      return res.status(404).json({
        message: 'Invalid verification token',
      });
    }

    if (userByToken[0].fields.isVerified[0]) {
      return res.status(200).json({
        message: 'This email is already verified.',
      });
    }

    const userByRecordId = await base('Persons')
      .select({
        maxRecords: 1,
        view: 'Grid view',
        filterByFormula: `{recordId} = "${recordId}"`,
      })
      .all();

    if (userByToken[0].fields.email[0] === userByRecordId[0].fields.email) {
      base('Persons').update(
        recordId,
        {
          isVerified: true,
        },
        function (err) {
          if (err) {
            return err;
          }
          return res.status(200).json({
            message: 'Thank you for your verification!',
          });
        }
      );
    } else {
      return res.status(409).json({
        message: 'There is an error in verification. Please contact the administrator.',
      });
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = {
  makeVerificationToken,
  router,
};
