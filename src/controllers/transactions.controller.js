const transactionService = require('../services/transactions.service');

const create = async (req, res) => {
    try {
        const transaction = await transactionService.createTransaction(req.body);
        return res.status(201).json(transaction)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

module.exports = {
    create,
};