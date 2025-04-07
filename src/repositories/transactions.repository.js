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

module.exports ={ 
    create,
    list,
}; 