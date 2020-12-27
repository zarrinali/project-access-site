const jwt = require('jsonwebtoken');

/**
 * Authenticate the token to validate the user
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
function authenticateToken(req, res, next) {
  const authHeader = req.headers;

  // Check for authorization in header and the first keyword
  if (authHeader.authorization !== undefined) {
    const token = authHeader.authorization;

    // Verify with secret token
    jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decode) => {
      if (err) {
        req.user = undefined;
        return res.status(403).json({
          message: 'Unauthorized access to the requested resources.',
        });
      }
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
}

module.exports = authenticateToken;
