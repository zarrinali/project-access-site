const express = require('express');
const router = express.Router();
const airtable = require('airtable');
const crypto = require('crypto-random-string');
const cryptoLength = 10;

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
  const data = await base('RegistrationData').create([{
    fields: {
      verificationToken: recordId +
        crypto({
          length: cryptoLength,
        }),
      dateTime: new Date(),
      persons: [recordId],
    },
  }, ]);
  return data[0].fields.verificationToken;
}

router.get('/verification/:verificationToken', async function (req, res, next) {
  try {
    const token = req.params.verificationToken;

    const userId = token.substring(0, token.length - cryptoLength);

    console.log('token: ' + token + ' ' + token.length);

    console.log('userId: ' + userId);
    return res.send('All good');
  } catch (err) {
    return next(err);
  }
});

module.exports = {
  makeVerificationToken,
  router,
};