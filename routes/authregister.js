const express = require('express');
const authregisterController = require('../controllers/authregister');
const router = express.Router();

router.post('/registrationpage', authregisterController.registrationpage)


module.exports = router;
