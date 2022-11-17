const express = require('express');
const authservicesController = require('../controllers/authservices');
const router = express.Router();

router.post('/services', authservicesController.services)


module.exports = router;
