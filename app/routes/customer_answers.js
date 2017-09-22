'use strict';

const express = require('express');
const knex = require('../../knex');

const router = express.Router();


router.get('/', (req, res, next) => {
  knex('customer_answers')
  .select('*')
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    next (err);
  });
});

router.get('/:id', (req, res, next) => {

  knex('customer_answers')
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
  knex('customer_answers')
  .insert({
    question_id: req.body.question_id,
    answer_id: req.body.answer_id,
    user: req.body.user
  }, '*')
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    next(err);
  });
});


router.patch('/:id', (req, res, next) => {
  knex('customer_answers')
  .where('id', req.params.id)
  .update({
    question_id: req.body.question_id,
    answer_id: req.body.answer_id,
    user: req.body.user
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

      knex('customer_answers')
        .where('id', req.params.id)
        .first()
        .then((row) => {
          if (!row) {
            return next();
          }

          record = row;


          return knex('customer_answers')
            .del()
            .where('id', req.params.id);
        })
        .then(() => {
          var holder = record.id;
          delete record.id;

          var obj = {
            id: holder,
            question_id: record.question_id,
            answer_id: record.answer_id,
            user: record.user,
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
