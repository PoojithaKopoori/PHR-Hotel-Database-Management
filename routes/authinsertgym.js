const express = require('express');
const authinsertgymController = require('../controllers/authinsertgym');
const router = express.Router();

router.post('/gyminsert', authinsertgymController.gyminsert)


module.exports = router;
