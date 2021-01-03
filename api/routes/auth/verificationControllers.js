const express = require('express');
const router = express.Router();
const base = require('../airtable');
const crypto = require('crypto-random-string');
const cryptoLength = 10;

/**
 * Make verification token for email verification
 * @param {String} recordId
 * @return {object}
 */
async function makeVerificationToken(recordId) {
  const data = await base('RegistrationData').create({
    RegistrationVerificationToken: recordId +
      crypto({
        length: cryptoLength,
      }),
    RegistrationDateTime: new Date(),
    PersonID: [recordId],
  });
  return data.fields.RegistrationVerificationToken;
}

router.get('/verification/:verificationToken', async function (req, res, next) {
  try {
    const token = req.params.verificationToken;

    const recordId = token.substring(0, token.length - cryptoLength);

    const userByToken = await base('RegistrationData')
      .select({
        maxRecords: 1,
        view: 'Grid view',
        filterByFormula: `{RegistrationVerificationToken} = "${token}"`,
      })
      .all();

    if (userByToken.length == 0) {
      return res.status(404).json({
        message: 'Invalid verification token',
      });
    }

    if (userByToken[0].fields.PersonVerified[0]) {
      return res.status(200).json({
        message: 'This email is already verified.',
      });
    }

    const userByRecordId = await base('Persons')
      .select({
        maxRecords: 1,
        view: 'Grid view',
        filterByFormula: `{PersonID} = "${recordId}"`,
      })
      .all();

    if (userByToken[0].fields.PersonEmail[0] === userByRecordId[0].fields.PersonEmail) {
      base('Persons').update(
        recordId, {
          PersonVerified: true,
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