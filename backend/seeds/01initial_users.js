/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Brock',last_name: 'Lee',username: 'blee98',email:'blee@gmail.com', password: '$2b$12$ohWbuOed.nZTMRIFCgNtFu6vE8Qw3Rv0QNd0JalG8.Y9aRgnOGWLm'},{first_name: 'Ella', last_name: 'Vater',username:'ella_vater1',email:'evater@gmail.com',password:'$2b$12$ohWbuOed.nZTMRIFCgNtFu6vE8Qw3Rv0QNd0JalG8.Y9aRgnOGWLm'}
  ]);
};
