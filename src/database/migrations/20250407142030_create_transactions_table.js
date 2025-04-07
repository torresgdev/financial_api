/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transactions', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.enu('type', ['INCOME', 'EXPENSE']).notNullable();
        table.string('category').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
