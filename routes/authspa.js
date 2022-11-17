const express = require('express');
const authspaController = require('../controllers/authspa');
const router = express.Router();

router.post('/spa', authspaController.spa)


module.exports = router;
