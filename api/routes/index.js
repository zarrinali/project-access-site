var express = require('express');
var router = express.Router();

// route to authentication
router.use('/auth', require('./authController'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
