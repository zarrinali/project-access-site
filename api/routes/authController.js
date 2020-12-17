const express = require('express');
const router = express.Router();
const airtable = require('airtable');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Configure Airtable with the API key and Base key
airtable.configure({
    apiKey: process.env.TOKEN,
    endpointUrl: 'https://api.airtable.com',
});
const base = airtable.base(process.env.DATABASE);

/**
 * For resources that require authorization
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
async function loginRequired(req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({
            message: 'Unauthorized user!',
        });
    }
}

/**
 * Find user that matches the email provided
 * @param {object} req
 */
async function findMatchUser(req) {
    const users = [];

    // Filter the DB with provided email and take out the user
    await base('Table 1')
        .select({
            maxRecords: 1,
            view: 'Grid view',
            filterByFormula: `{email} = "${req.body.user.email}"`,
        })
        .all()
        .then(function (records) {
            records.forEach(function (record) {
                users.push(record.fields);
            });
        })
        .catch(function (err) {
            return err;
        });

    return users;
}

/**
 * Send email and password to DB for registration
 */
router.post('/signup', async function (req, res) {
    const matchUser = await findMatchUser(req);

    if (matchUser.length == 0) {
        // Hash user's password before adding to DB
        const hashPassword = bcrypt.hashSync(req.body.user.password, saltRounds);

        // Create a new user in DB
        base('Table 1').create(
            [{
                fields: {
                    email: req.body.user.email,
                    password: hashPassword,
                },
            }, ],
            function (err, record) {
                if (err) {
                    return res.status(400).json({
                        message: err,
                    });
                }
                // Make password undefined before sending back to client
                record[0].fields.password = undefined;
                return res.status(201).json({
                    user: record[0].fields,
                    message: 'Registration successful!',
                });
            }
        );
    } else {
        return res.status(409).json({
            message: 'This email is already registered.',
        });
    }
});

/**
 * Fetch email and password from DB
 * and compare with user-provided email and password to authenticate
 */
router.post('/login', async function (req, res) {
    const matchUser = await findMatchUser(req);

    if (matchUser.length > 0) {
        const user = matchUser[0];

        // Compare user's password and the password in DB
        if (bcrypt.compareSync(req.body.user.password, user.password)) {
            const token = jwt.sign({
                email: user.email,
                _id: user.record_id
            }, process.env.SECRET_ACCESS_TOKEN, {
                algorithm: 'HS256',
                expiresIn: '28800s'
            })

            res.cookie('token', token, {
                httpOnly: true
            });

            // Give the user a token to authenticate
            return res.json({
                token: token,
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
});

module.exports = router;