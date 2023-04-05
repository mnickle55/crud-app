/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users',table => {
    table.increments('id');
    table.string('username');
    table.string('password');
    table.string('first_name');
    table.string('last_name');
    table.string('session_id');
    table.string('session_create_date');
    table.string('session_expire_date');
    table.timestamps(true,true);
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
