const express = require('express');
const router = express.Router();

router.use('/', require('./userControllers'));
router.use('/student/', require('./studentControllers').router);

module.exports = router;