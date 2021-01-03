const express = require('express');
const router = express.Router();

// route to authentication
router.use('/auth', require('./auth'));

// route to courses and assignments
router.use('/course', require('./course'));

// route to users
router.use('/user', require('./user'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

module.exports = router;