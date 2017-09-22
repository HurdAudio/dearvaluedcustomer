'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('survey_questions', function(table) {
    table.increments().primary();
    table.string('question_text').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('survey_questions');
};
