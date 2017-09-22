'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customer_answers', function(table) {
    table.increments().primary();
    table.integer('question_id').notNullable().defaultTo(1).references('id').inTable('survey_questions').onDelete('CASCADE').index();
    table.integer('answer_id').notNullable().defaultTo(1).references('id').inTable('survey_answers').onDelete('CASCADE').index();
    table.integer('user').notNullable().defaultTo(1);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customer_answers');
};
