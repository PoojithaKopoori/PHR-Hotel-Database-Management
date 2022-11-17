const express = require('express');
const authgymController = require('../controllers/authgym');
const router = express.Router();

router.post('/gym', authgymController.gym)


module.exports = router;
