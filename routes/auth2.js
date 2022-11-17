const express = require('express');
const auth2Controller = require('../controllers/auth2');
const router = express.Router();

router.post('/superiorroom', auth2Controller.superiorroom)


module.exports = router;
