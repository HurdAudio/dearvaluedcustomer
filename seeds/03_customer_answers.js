'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('customer_answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer_answers').insert([
        {
          id: 1,
          question_id: 1,
          answer_id: 1,
          user: 1,
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('customer_answers_id_seq', (SELECT MAX(id) FROM customer_answers));");
  });
};
