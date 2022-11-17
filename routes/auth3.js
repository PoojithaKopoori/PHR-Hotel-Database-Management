const express = require('express');
const auth3Controller = require('../controllers/auth3');
const router = express.Router();

router.post('/premiumroom', auth3Controller.premiumroom)


module.exports = router;
