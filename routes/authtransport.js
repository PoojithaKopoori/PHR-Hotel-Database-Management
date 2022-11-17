const express = require('express');
const authtransportController = require('../controllers/authtransport');
const router = express.Router();

router.post('/transport', authtransportController.transport)

module.exports = router;
