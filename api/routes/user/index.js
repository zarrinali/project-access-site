const express = require('express');
const router = express.Router();

router.use('/', require('./userControllers'));

module.exports = router;