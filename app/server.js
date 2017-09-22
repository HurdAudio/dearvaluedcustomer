'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const knex = require('knex');

require('dotenv').config();

const app = express();

const customer_answers = require('./routes/customer_answers.js');
const survey_answers = require('./routes/survey_answers.js');
const survey_questions = require('./routes/survey_questions.js');

const port = process.env.PORT || 3007;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));
// app.use('/scripts', express.static(path.join(__dirname, '../node_modules/vexflow/releases/')));
// app.use('/moment', express.static(path.join(__dirname, '../node_modules/moment/min/')));


app.use('/customer_answers', customer_answers);
app.use('/survey_answers', survey_answers);
app.use('/survey_questions', survey_questions);



app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



app.listen(port, () => {
  console.log('Listening on port', port);
  console.log('postgreSQL is lit.');
});

module.exports = app;
