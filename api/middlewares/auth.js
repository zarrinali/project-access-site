const jwt = require('jsonwebtoken');

/**
 * Authenticate the token to validate the user
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;

    // Check for authorization in header and the first keyword
    if (authHeader !== undefined && authHeader.split(' ')[0] === 'JWT') {
        const tokens = authHeader.split(' ');

        // Verify with secret token
        jwt.verify(tokens[1], process.env.SECRET_ACCESS_TOKEN, (err, decode) => {
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