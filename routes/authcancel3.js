const express = require('express');
const authcancel3Controller = require('../controllers/authcancel3');
const router = express.Router();

router.post('/cancelpremiumroom', authcancel3Controller.cancelpremiumroom)


module.exports = router;
