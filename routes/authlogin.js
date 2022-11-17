const express = require('express');
const authloginController = require('../controllers/authlogin');
const router = express.Router();

router.post('/loginpage', authloginController.loginpage)


module.exports = router;
