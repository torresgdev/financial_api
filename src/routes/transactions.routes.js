const express = require('express');
const router = express.Router();
const transActionController = require('../controllers/transactions.controller');

router.post('/', transActionController.create);
router.get('/', transActionController.list);
router.get('/summary', transActionController.summary)
router.delete('/:id', transActionController.remove)
router.put('/:id', transActionController.update)

module.exports = router;