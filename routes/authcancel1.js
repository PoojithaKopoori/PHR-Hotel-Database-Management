const express = require('express');
const authcancel1Controller = require('../controllers/authcancel1');
const router = express.Router();

router.post('/canceldeluxeroom', authcancel1Controller.canceldeluxeroom)


module.exports = router;
