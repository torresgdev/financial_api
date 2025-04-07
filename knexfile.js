require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '123',
      database: 'financial_db',
      port: 5432,
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
};
