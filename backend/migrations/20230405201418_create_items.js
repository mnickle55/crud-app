/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items',table => {
    table.increments('id');
    table.string('name');
    table.string('description',300);
    table.integer('quantity');
    table.integer('user_id');
    table.foreign('user_id')
    table.timestamps(true,true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('items')
};
