const express = require('express');
const router = express.Router();

router.use('/', require('./courseControllers'));
router.use('/', require('./assignmentControllers'));

module.exports = router;
