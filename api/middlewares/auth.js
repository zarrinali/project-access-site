const jwt = require('jsonwebtoken');

/**
 * Authenticate the token to validate the user
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
function authenticateToken(req, res, next) {
  const token = req.cookies.authorization;

  // Check for authorization in header and the first keyword
  if (token) {
    // Verify with secret token
    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decode) => {
      if (err) {
        console.log(err);
        res.clearCookie('authorization');
        res.clearCookie('_uid');
        return next();
      }

      res.cookie('_uid', decode._id, {
        httpOnly: true,
        maxAge: process.env.JWT_EXPIRY_SECONDS * 1000,
      });

      refreshToken(decode, res);

      next();
    });
  } else {
    res.clearCookie('_uid');
    next();
  }
}

function refreshToken(payload, res) {
  const timeNow = Math.round(Number(new Date()) / 1000);

  if (payload.exp - timeNow <= 300) {
    const newToken = jwt.sign(
      {
        email: payload.email,
        _id: payload._id,
      },
      process.env.SECRET_ACCESS_TOKEN,
      {
        algorithm: 'HS256',
        expiresIn: process.env.JWT_EXPIRY_SECONDS + 's',
      }
    );

    // Give the user a token to authenticate
    res.cookie('authorization', newToken, {
      httpOnly: true,
      maxAge: process.env.JWT_EXPIRY_SECONDS * 1000,
    });
  }
}

module.exports = authenticateToken;
