const express = require('express');
const router = express.Router();

router.use('/', require('./courseControllers'));

module.exports = router;