'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('survey_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('survey_questions').insert([
        {
          id: 1,
          question_text: 'How many people live in your household?',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('survey_questions_id_seq', (SELECT MAX(id) FROM survey_questions));");
  });
};
