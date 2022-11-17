const express = require('express');
const authinsertspaController = require('../controllers/authinsertspa');
const router = express.Router();

router.post('/spainsert', authinsertspaController.spainsert)


module.exports = router;
