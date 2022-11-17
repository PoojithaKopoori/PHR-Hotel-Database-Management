const express = require('express');
const auth1Controller = require('../controllers/auth1');
const router = express.Router();

router.post('/deluxeroom', auth1Controller.deluxeroom)

module.exports = router;
