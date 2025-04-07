const knex = require('../database/connection')

const create = async(transactionData) => {
    const [transaction] = await knex('transactions')
    .insert(transactionData)
    .returning('*')

    return transaction;
};

const list = async (month, year) => {
    let query = knex('transactions');

    if (month && year) {
        query = query
        .whereRaw('EXRACT(MONTH FROM created_at) = ?', [month])
        .andWhereRaw('EXTRACT(YEAR FROM created_at) = ?',[year])
    }

    const transactions = await query.orderBy('created_at', 'desc');
    return transactions;
}

const getSummary = async () => {
    const result = await knex('transactions')
    .select('type')
    .sum('amount as total')
    .groupBy('type');

    let income = 0;
    let expense = 0;

    result.forEach((item) => {
        if (item.type === 'INCOME') {
            income = Number(item.total);
        } else if (item.type === 'EXPENSE') {
            expense = Number(item.total)
        }
    });

    return {
        income,
        expense,
        balance: income - expense,
    }
}

module.exports ={ 
    create,
    list,
}; 