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

module.exports = { 
    createTransaction,
};