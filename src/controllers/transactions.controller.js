const transactionService = require('../services/transactions.service');

const create = async (req, res) => {
    try {
        const transaction = await transactionService.createTransaction(req.body);
        return res.status(201).json(transaction)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};

const list = async (req, res) => {
    try {
        const { month, year} = req.query;
        const transactions = await transactionService.listTransactions(month, year);
        return res.json(transactions)
    } catch (error) {
        return res.status(500).json({error: 'ERROR could not list transactions'})
    }
}

const summary = async (req, res) => {
    try {
        const data = await transactionService.getSummary();
        return res.json(data)
    } catch (error) {
        return res.status(500).json({error: 'Error could not calculate finances'})
    }
}

module.exports = {
    create,
    list,
    summary,
};