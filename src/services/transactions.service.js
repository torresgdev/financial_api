const transactionRepository = require('../repositories/transactions.repository');

const createTransaction = async ({ title, amount, type, category }) => {
    if (!title || !amount || !type || !category) {
        throw new Error('All fields are necessary')
    }

    if (!['INCOME', 'EXPENSE'].includes(type)) {
        throw new Error('Invalid Type: use INCOME or EXPENSE')
    }

    const newTransaction = await transactionRepository.create({
        title, 
        amount,
        type, 
        category,
    });

    return newTransaction;
}

const listTransactions = async (month, year) => {
    return await transactionRepository.list(month, year);
};

const getSummary = async () => {
    return await transactionRepository.getSummary()
}

const deleteTransaction = async (id) => {
    const deleted = await transactionRepository.remove(id);

    if (deleted === 0) {
        throw new Error('Transaction not found')
    }

    return { message: 'Transaction deleted with success'}
}

module.exports = { 
    createTransaction,
    listTransactions,
    getSummary,
    deleteTransaction,
};