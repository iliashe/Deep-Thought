import Question from '../js/classes/question';
import query from '../js/api/query';
import { Loading, Notify } from 'quasar';

// '+' button
const addQuestion = function(state) {
  state.questions.splice(0, 0, new Question())
};

// top `clear` button
const clearAll = function(state) {
  // s.t. `textarea` tag instead of `p` would be displayed (query doesn't get actually send)
  state.queryIsSent = false;
  // s.t. components wouldn't reload, if they are already in default state
  if(state.passage !== '' || state.questions > 1 || state.questions[0].q !== '') {
    state.passage = '';
    state.questions = [new Question()];
    state.examples.map(ex => ex.questions.map(ans => ans.answer.answer = ''));
  }
};

// `remove all` button
const clearQuestions = function(state) {
  if(state.questions.length > 1 || state.questions[0].q.length > 0) {
    state.questions = [new Question()];
    state.examples.map(ex => ex.questions.map(ans => ans.answer.answer = ''));
  }
};

// `edit button`
const editPassage = function(state) {
  // toggle from `p` tag to `textarea`
  state.queryIsSent = false;
};

const handleError = function(err) {
  setTimeout(() => Loading.hide(), 2000)
  setTimeout(() => Notify.create({
    group: false,
    timeout: 2000,
    color: 'negative',
    message: `Question answering failed! Error: ${err.message}`
  }), 1000)

}

const handleResponse = function(res, question) {
    setTimeout(() => Loading.hide(), 1000)
    setTimeout(()=> Notify.create({
      group: false,
      type: 'positive',
      timeout: 10,
      message: 'Question is answered successfully'
    }), 1000);
    setTimeout(
      function() {
        question.answer = res.data;
        question.answer.isVisible = true;
        question.answer.isRelevant = true;
      }, 1000)
};

// `flashlight` button
const highlightAnswer = function(state, question) {
  // s.t. `p` tag instead of `textarea` would be displayed (query doesn't get actually send)
  state.queryIsSent = true;
  const answer = question.answer; // Object
  if(answer.isMarked) {
    answer.isMarked = false;
  } else {
    answer.isMarked = true;
  }
  // if we updated a passage, we want to make sure that the answer is still relevant
  if(!state.passage.includes(answer.answer)) {
    answer.isRelevant = false;
  } else {
    answer.isRelevant = true;
  }
};

// `trash can` button
const removeQuestion = function(state, question) {
  state.questions = state.questions.filter(q => q !== question);
};

// example button
const runExample = function(state, ex) {
  // removing all questions that existed before
  state.questions = [];
  // removing the answers to the examples
  state.examples.map(ex => ex.questions.map(ans => ans.answer.answer = ''));
  const example = state.examples[ex];
  state.passage = example.passage;

  state.queryIsSent = true;
  for(let i = 0; i < example.questions.length; i += 1) {
    state.questions[i] = example.questions[i]
    sendQuestion(state, state.questions[i])
  }
};

// play button
const sendQuestion = async function(state, question) {
  if(question.answer.answer === '' || !question.answer.isRelevant){
    Loading.show()
    await query(question.q, state.passage)
      .then((res) => handleResponse(res, question))
      .catch((err) => handleError(err))
    state.queryIsSent = true;
  } 
};

// `get answer` button
const sendQuestions = function(state) {
  // questions that were not answered yet
  // const questions = state.questions.filter(q => q.answer.answer === '');
  const questions = state.questions
  for(const question of questions) {
    sendQuestion(state, question)
  }
  //state.queryIsSent = true;
};

// edit passage before sending a query
const updatePassage = function(state, psg) {
  // taking rid of unnecessary spaces
  const newPassage = psg.split(' ').filter(s => s !== '').join(' ');
  state.passage = newPassage;
  state.questions.map(q => state.passage.includes(q.answer.answer) ?  q.answer.isRelevant : q.answer.isRelevant = false)
};

const updateQuestion = function(state, props) {
  const question = state.questions[props.id]
  question.q = props.q;
  question.answer.answer = '';
};

export default {
  addQuestion,
  clearAll,
  clearQuestions,
  editPassage,
  highlightAnswer,
  removeQuestion,
  runExample,
  sendQuestion,
  sendQuestions,
  updatePassage,
  updateQuestion,
}
