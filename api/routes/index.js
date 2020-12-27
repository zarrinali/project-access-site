const express = require('express');
const router = express.Router();

// route to authentication
router.use('/auth', require('./auth'));

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

module.exports = router;
