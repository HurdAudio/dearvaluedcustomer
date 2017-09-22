'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('survey_answers', function(table) {
    table.increments().primary();
    table.integer('question_id').notNullable().defaultTo(1).references('id').inTable('survey_questions').onDelete('CASCADE').index();
    table.integer('order').notNullable().defaultTo(1);
    table.string('answer_text').notNullable().defaultTo('default answer');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('survey_answers');
};
