const express = require('express');
const authuserController = require('../controllers/authuser');
const router = express.Router();

router.post('/user', authuserController.user)


module.exports = router;
