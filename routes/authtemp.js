const express = require('express');
const authtempController = require('../controllers/authtemp');
const router = express.Router();

router.post('/temp', authtempController.temp)


module.exports = router;
