import Question from '../js/classes/question';
import query from '../js/api/query';

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
  }
};

// `remove all` button
const clearQuestions = function(state) {
  if(state.questions.length > 1 || state.questions[0].q.length > 0) {
    state.questions = [new Question()];
  }
};

// `edit button`
const editPassage = function(state) {
  // toggle from `p` tag to `textarea`
  state.queryIsSent = false;
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

  const example = state.examples[ex];
  state.passage = example.passage;

  state.queryIsSent = true;
  for(let i = 0; i < example.questions.length; i += 1) {
    state.questions[i] = example.questions[i]
    sendQuestion(state, state.questions[i])
    // let answer = {}
    // await query(ex.questions[i], ex.passage)
    //   .then(function(res) {
    //     answer.answer = res.data.answer;
    //     answer.score = res.data.score;
    //     answer.start = res.data.start;
    //     answer.end = res.data.end;
    //     state.questions[i] = new Question({
    //         q: ex.questions[i],
    //         answer: answer,
    //     })
    //   }).catch((error) => console.error(error));
  }
};

// play button
const sendQuestion = async function(state, question) {
  if(state.passage.length > 0 && question.q.length > 0) {
    if(question.answer.answer === '' || !question.answer.isRelevant){
      await query(question.q, state.passage)
        .then(function(res) {
          question.answer = res.data;
          question.answer.isVisible = true;
          question.answer.isRelevant = true;
        //   state.questions.push(
        //     new Question({
        //       q: question.q,
        //       answer: question.answer,
        //     })
        //   )
        })
        .catch((error) => console.error(error))
      state.queryIsSent = true;
    } 
  } else {
    return null
  }
};

// run all button
const sendQuestions = function(state) {
  const questions = state.questions.filter(q => q.answer.answer === '');
  if(state.passage.length > 0 &&
    state.questions.filter((q) => q.q !== '').length === state.questions.length) {
      for(const question of questions) {
        query(question.q, state.passage)
          .then(function(res) {
            question.answer = res.data;
            question.answer.isVisible = true;
          })
          .catch((error) => console.error(error))
      }
      state.queryIsSent = true;
  } else {
//    alert('All fields must be filled')
    return null
  }
};

// edit passage before sending a query
const updatePassage = function(state, psg) {
  // taking rid of unnecessary spaces
  const newPassage = psg.split(' ').filter(s => s !== '').join(' ');
  state.passage = newPassage;
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
