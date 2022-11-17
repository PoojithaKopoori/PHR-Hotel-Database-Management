const express = require('express');
const authselectedController = require('../controllers/authselected');
const router = express.Router();

router.post('/standardroom', authController.standardroom)


module.exports = router;
