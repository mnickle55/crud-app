/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Default',last_name: 'User',username: 'username',password: 'password'}
  ]);
};
