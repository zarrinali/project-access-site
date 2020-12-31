const express = require('express');
const router = express.Router();
const {
    loginRequired
} = require('../auth/authControllers');
const base = require('../airtable');

/**
 * Find user that matches the email provided
 * @param {object} recordId
 */
async function queryUser(recordId) {
    const user = await base('Persons').find(recordId);
    return user;
}

router.get('/profile', loginRequired, async function (req, res, next) {
    try {
        const user = await queryUser(req._uid);
        const userInfo = user.fields;

        return res.status(200).json({
            email: userInfo.email,
        });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;