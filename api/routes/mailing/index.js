const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const { EMAIL_USER, EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, EMAIL_REFRESH_TOKEN } = process.env;

const mailing = {};

const oauth2Client = new OAuth2(EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, OAUTH_PLAYGROUND);

/**
 * Send an email to user's email for verification
 * @param {object} data
 */
mailing.sendEmail = (data) => {
  oauth2Client.setCredentials({
    refresh_token: EMAIL_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport(
    {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL_USER,
        clientId: EMAIL_CLIENT_ID,
        clientSecret: EMAIL_CLIENT_SECRET,
        refreshToken: EMAIL_REFRESH_TOKEN,
        accessToken,
      },
    },
    {
      from: {
        name: 'Project Access Austria',
        address: EMAIL_USER,
      },
    }
  );

  console.log(data.email);

  const mailOptions = {
    to: data.email,
    subject: 'Please verify your email - Project Access Austria',
    text: data.text,
    html: data.html,
  };

  transporter.sendMail(mailOptions, function (err, response) {
    if (err) {
      console.log(err);
      return err;
    }
    console.log(response);
    return 'sent';
  });
};

module.exports = mailing;
