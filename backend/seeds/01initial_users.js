/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Brock',last_name: 'Lee',username: 'blee98',email:'blee98@gmail.com', password: '$2b$12$5lL03rvjxJ/FK7/Aqf774uxOSJrwdjljlfk0FhhXtXlCJ.5RXTH0K'}
  ]);
};
