const express = require('express');
const router = express.Router();

router.use('/', require('./authControllers').router);
router.use('/', require('./verificationControllers').router);

module.exports = router;