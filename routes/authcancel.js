const express = require('express');
const authcancelController = require('../controllers/authcancel');
const router = express.Router();

router.post('/cancelstandardroom', authcancelController.cancelstandardroom)


module.exports = router;
