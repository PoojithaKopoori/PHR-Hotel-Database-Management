const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/standardroom', authController.standardroom)


module.exports = router;
