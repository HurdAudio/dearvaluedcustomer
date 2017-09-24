'use strict';

// import React from 'react';
// import ReactDOM from 'react-dom';
//import axios from 'axios';

const surveyInvite = document.getElementById('surveyInvite');
const answers = document.getElementById('answers');

function nextAnswer(arr, num) {
  return(
    arr.filter((ans)=>{
    return(ans.order === (num + 1));
  }));

}

function getString(answersArr) {
  let elements = "React.createElement('form', {className: 'pure-form'}, ";
  let endElements = "));";
  let ansObj;
  let questionName = 'answer' + answersArr[0].question_id;
  elements += "React.createElement('fieldset', {className: 'pure-group'}, ";

  for (let i = 0; i < answersArr.length; i++) {
    ansObj = nextAnswer(answersArr, i);
    elements += "React.createElement('div', {className: 'answerField'}, React.createElement('input', {type: 'radio', name: " + questionName + "}, React.createElement('p', null, " + ansObj.answer_text + "))), ";
  }
  elements += "React.createElement('button', {className: 'button', type: 'submit'}, 'SUBMIT')";
  return(elements + endElements);
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
            React.createElement('div', {className: 'answerField'},
               React.createElement('input', {type: 'radio' },
                 React.createElement('p', {}, questionAnswers[0].answer_text)
               )
            )
          )
        );
      }
    });
    ReactDOM.render(React.createElement(App), answers);
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





window.onload = ()=>{
  console.log('ready');



  let beginButton = document.getElementById('beginButton');


  beginButton.addEventListener('click', ()=>{
    beginButton.setAttribute("style", "display: none;");
    startSurvey(1);
  });
  // const element = React.createElement(
  //   'h2',
  //   {id: 'surveyTime'},
  //
  //   'Please take our short survey:'
  // );
  // const startButton = React.createElement(
  //   'button',
  //   {className: 'button'},
  //   'BEGIN'
  // );
  //ReactDOM.render(element, surveyInvite);
  //ReactDOM.render(startButton, document.getElementById('surveyTime'));
};

// window.onload = ()=>{
//   const buttonEl = React.createElement(
//     'button',
//     {className: 'button'},
//     'BEGIN'
//   );
//   ReactDOM.render(buttonEl, document.getElementById('startDiv'));
// };
