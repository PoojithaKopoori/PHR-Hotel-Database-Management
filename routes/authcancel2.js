const express = require('express');
const authcancel2Controller = require('../controllers/authcancel2');
const router = express.Router();

router.post('/cancelsuperiorroom', authcancel2Controller.cancelsuperiorroom)


module.exports = router;
