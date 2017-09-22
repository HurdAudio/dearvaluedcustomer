'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('survey_answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('survey_answers').insert([
        {
          id: 1,
          question_id: 1,
          order: 1,
          answer_text: '1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          question_id: 1,
          order: 2,
          answer_text: '2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          question_id: 1,
          order: 3,
          answer_text: '3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          question_id: 1,
          order: 4,
          answer_text: '4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          question_id: 1,
          order: 5,
          answer_text: 'More than 4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }

      ]);
    }).then(() => {
      return knex.raw("SELECT setval('survey_answers_id_seq', (SELECT MAX(id) FROM survey_answers));");
  });
};
