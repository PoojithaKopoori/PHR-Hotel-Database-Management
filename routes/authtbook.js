const express = require('express');
const authtbookController = require('../controllers/authtbook');
const router = express.Router();

router.post('/tbook', authtbookController.tbook)


module.exports = router;
