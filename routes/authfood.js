const express = require('express');
const authfoodController = require('../controllers/authfood');
const router = express.Router();

router.post('/food', authfoodController.food)


module.exports = router;
