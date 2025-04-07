const knex = require('../database/connection')

const create = async(transactionData) => {
    const [transaction] = await knex('transactions')
    .inster(transactionData)
    .returning('*')

    return transaction;
};

module.exports ={ 
    create,
}; 