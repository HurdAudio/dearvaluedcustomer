'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
//import axios from 'axios';

const surveyInvite = document.getElementById('surveyInvite');
const answers = document.getElementById('answers');
const resultsSummary = document.getElementById('resultsSummary');
var answered = false;

function getCookie (name) {
    var cookies = document.cookie.split(';');
    for(var i=0 ; i < cookies.length ; ++i) {
        var pair = cookies[i].trim().split('=');
        if(pair[0] === name) {
            return (pair[1]);
          }
    }
    return null;
  }



function setListener (btn, element, responses) {
  element.element.addEventListener('click', ()=>{
    answered = true;
    btn.setAttribute("style", "visibility: visible;");
    element.value = 'on';
    for (let i = 0; i < responses.length; i++) {
      if (responses[i] !== element) {
        responses[i].value = 'off';
      }
    }

  });
}

function resizeBar(divBar, currentSize, targetSize) {
  if (currentSize === targetSize) {
    return;
  } else {
    divBar.setAttribute("style", "width: " + currentSize + "%;");
  }
  setTimeout(()=>{
    resizeBar(divBar, currentSize + 1, targetSize);
  }, 45);
}

function sidePanelResults(answers, surveyAnswers, selections) {
  console.log(selections[0].answer_text + ' - ' + answers[0] + ' of ' + surveyAnswers.length + ' responses');
  const SurveySays = React.createClass({
    getInitialState: function () {
      return (null);
    },
    render: function () {
      return React.createElement('div', {},
        React.createElement('h4', {}, selections[0].answer_text + ' - ' + answers[0] + ' of ' + surveyAnswers.length + ' responses'),
        React.createElement('div', { className: 'answerblock', id: ('surveyNo' + selections[0].id)}, ''),
        React.createElement('h4', {}, selections[1].answer_text + ' - ' + answers[1] + ' of ' + surveyAnswers.length + ' responses'),
        React.createElement('div', { className: 'answerblock', id: ('surveyNo' + selections[1].id)}, ''),
        React.createElement('h4', {}, selections[2].answer_text + ' - ' + answers[2] + ' of ' + surveyAnswers.length + ' responses'),
        React.createElement('div', { className: 'answerblock', id: ('surveyNo' + selections[2].id)}, ''),
        React.createElement('h4', {}, selections[3].answer_text + ' - ' + answers[3] + ' of ' + surveyAnswers.length + ' responses'),
        React.createElement('div', { className: 'answerblock', id: ('surveyNo' + selections[3].id)}, ''),
        React.createElement('h4', {}, selections[4].answer_text + ' - ' + answers[4] + ' of ' + surveyAnswers.length + ' responses'),
        React.createElement('div', { className: 'answerblock', id: ('surveyNo' + selections[4].id)}, '')
      );

    }
  });
  ReactDOM.render(
    React.createElement(SurveySays),
    resultsSummary
  );
  let element;
  let sizer = 0;
  for (let k = 0; k <selections.length; k++) {
    element = document.getElementById('surveyNo' + selections[k].id);
    sizer = Math.floor(100 * (answers[k] / surveyAnswers.length));
    if (sizer > 0) {
      resizeBar(element, 1, sizer);
    }
  }
  document.cookie = 'youansweredthequestion' + "=" + 'already';
  endSurvey();
}

function displayResultsPanel(qq) {
  axios.get('/customer_answers')
  .then(completeAnswersData=>{
    let completeAnswers = completeAnswersData.data;
    let questionAnswers = completeAnswers.filter((ans)=>{
      return(ans.question_id === qq);
    });
    axios.get('/survey_answers')
    .then(completeSurveySelectionsData=>{
      let completeSurveySelections = completeSurveySelectionsData.data;
      let questionSelections = completeSurveySelections.filter((sel)=>{
        return(sel.question_id === qq);
      });
      let answers = [];
      for (let i = 0; i < questionSelections.length; i++) {
        answers[i] = 0;
      }
      for (let j = 0; j < questionAnswers.length; j++) {
        answers[questionAnswers[j].answer_id - 1] += 1;
      }
      sidePanelResults(answers, questionAnswers, questionSelections);
    });
  });
}

function surveyResultsTime(responses, qq) {
  let subObj = {
    question_id: qq.id
  };
  for (let i = 0; i < responses.length; i++) {
    if (responses[i].value === 'on') {
      subObj.answer_id = responses[i].id;
    }
  }
  axios.get('/customer_answers')
  .then(allAnswersData=>{
    let allAnswers = allAnswersData.data;
    subObj.user = allAnswers.length + 1;
    axios.post(`/customer_answers`, subObj)
    .then(postedData=>{
      let posted = postedData.data;
      console.log(posted);
      displayResultsPanel(qq);
    });
  });


}



function handleSubmission(button, responses, qq) {

  for (let i = 0; i < responses.length; i++) {
    setListener(button, responses[i], responses);
  }

  button.addEventListener('click', ()=>{
    console.log('we clicked');
    button.setAttribute("style", "visibility: hidden;");
    surveyResultsTime(responses, qq);
  });
}

function displayAnswers(qq) {
  axios.get('/survey_answers')
  .then(surveyAnswersData=>{
    let surveyAnswers = surveyAnswersData.data;
    let questionAnswers = surveyAnswers.filter((ans)=>{
      return(ans.question_id === qq);
    });
    const App = React.createClass({
      getInitialState: function() {
        return(null);
      },
      render: function() {
        return(
          React.createElement('form', {className: 'pure-form'},
            React.createElement('fieldset', {className: 'pure-group'},
              React.createElement('div', {className: 'answerField'},
                React.createElement('input', {type: 'radio', id: ('answer' + questionAnswers[0].id), name: 'surveyAnswer' }),
                  React.createElement('p', {}, questionAnswers[0].answer_text),
                React.createElement('input', {type: 'radio', id: ('answer' + questionAnswers[1].id), name: 'surveyAnswer' }),
                  React.createElement('p', {}, questionAnswers[1].answer_text),
                React.createElement('input', {type: 'radio', id: ('answer' + questionAnswers[2].id), name: 'surveyAnswer' }),
                  React.createElement('p', {}, questionAnswers[2].answer_text),
                React.createElement('input', {type: 'radio', id: ('answer' + questionAnswers[3].id), name: 'surveyAnswer' }),
                  React.createElement('p', {}, questionAnswers[3].answer_text),
                React.createElement('input', {type: 'radio', id: ('answer' + questionAnswers[4].id), name: 'surveyAnswer' }),
                  React.createElement('p', {}, questionAnswers[4].answer_text)
                //)

              ),
              React.createElement('button', {className: 'button', id: 'answerSubmit', type: 'button'}, 'SUBMIT')
            )
          )
        );
      }
    });
    ReactDOM.render(React.createElement(App), answers);
    let submitButton = document.getElementById('answerSubmit');
    let responseArray = [];
    for (let i = 0; i <questionAnswers.length; i++) {
      responseArray[i] = {};
      responseArray[i].element = document.getElementById('answer' + questionAnswers[i].id);
      responseArray[i].id = questionAnswers[i].id;
      responseArray[i].text = questionAnswers[i].answer_text;
      responseArray[i].value = 'off';
    }
    submitButton.setAttribute("style", "visibility: hidden;");
    handleSubmission(submitButton, responseArray, qq);
  });
}

function questionInTheMiddle(qqq) {
  axios.get(`/survey_questions/${qqq}`)
  .then(qData=>{
    let q = qData.data;
    let questionMid = React.createElement(
      'h3',
      {id: 'completion'},
      q.question_text
    );
    ReactDOM.render(questionMid, answers);
  });
}

function startSurvey(qq) {
  axios.get(`/survey_questions/${qq}`)
  .then(questionData=>{
    let question = questionData.data;
    let questionField = React.createElement(
      'h3',
      {id: 'questionText'},
      question.question_text

    );
    ReactDOM.render(questionField, surveyInvite);
    displayAnswers(qq);
  });
}

function endSurvey() {
  let thanYou = React.createElement('h3', {id: 'thankUser'}, 'Thank You for your response!');
  ReactDOM.render(thanYou, surveyInvite);
}





window.onload = ()=>{
  console.log('ready');
  let notNewUserCheck = getCookie('youansweredthequestion');

  if (notNewUserCheck === 'already') {
    questionInTheMiddle(1);
    displayResultsPanel(1);
  } else {
    let beginButton = document.getElementById('beginButton');


    beginButton.addEventListener('click', ()=>{
      beginButton.setAttribute("style", "display: none;");
      startSurvey(1);
    });
  }

};
