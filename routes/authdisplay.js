const express = require('express');
const authdisplayController = require('../controllers/authdisplay');
const router = express.Router();

router.post('/display', authdisplayController.display)


module.exports = router;
