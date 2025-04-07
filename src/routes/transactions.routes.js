const express = require('express');
const router = express.Router();
const transActionController = require('../controllers/transactions.controller');

router.post('/', transActionController.create);

module.exports = router;