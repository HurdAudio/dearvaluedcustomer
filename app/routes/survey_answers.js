'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('survey_answers')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('survey_answers')
    .select()
    .where('id', req.params.id)
    .first()
    .then((answer) => {
      if (!answer) {
        return next();
      }

      res.send(answer);
    })
    .catch((err) => {
      next(err);
    });
});


router.post('/', (req, res, next) => {
  knex('survey_answers')
  .insert({
    question_id: req.body.question_id,
    order: req.body.order,
    answer_text: req.body.answer_text
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('survey_answers')
  .where('id', req.params.id)
  .update({
    question_id: req.body.question_id,
    order: req.body.order,
    answer_text: req.body.answer_text
  }, '*')
    .then((results)=>{
       res.status(200).send(results[0]);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', (req, res, next) => {
    let record;

      knex('survey_answers')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('survey_answers')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            question_id: record.question_id,
            order: record.order,
            answer_text: record.answer_text,
            created_at: record.created_at,
            updated_at: record.updated_at
          };

          res.send(obj);
        })
        .catch((err) => {
          next(err);
        });
    });




module.exports = router;
