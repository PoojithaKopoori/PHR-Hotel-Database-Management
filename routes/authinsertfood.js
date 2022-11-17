const express = require('express');
const authinsertfoodController = require('../controllers/authinsertfood');
const router = express.Router();

router.post('/foodinsert', authinsertfoodController.foodinsert)


module.exports = router;
