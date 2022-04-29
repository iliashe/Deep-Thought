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
  state.passage = '';
  state.questions = [new Question()];
};

// `remove all` button
const clearQuestions = function(state) {
  if(state.questions.length > 1 || state.questions[0].q.length > 0) {
    for(const question of state.questions) {
        removeHighlight(state, question);
    }
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
  const answer = question.answer.answer;
  const answer_marked = "<mark class='marked'>" + answer + "</mark>"
  if (state.rawPassage === '') {
    state.rawPassage = state.passage.replace(answer, answer_marked);
    const psg = document.getElementsByClassName('passage')[0];
    psg.innerHTML = state.rawPassage;
  } else if (!state.rawPassage.includes(answer_marked)){
    state.rawPassage = state.rawPassage.replace(answer, answer_marked)
    const psg = document.getElementsByClassName('passage')[0];
    psg.innerHTML = state.rawPassage;  
  } else { // button was pressed twice, which means a mark needs to be removed
    removeHighlight(state, question);
  }
};

const removeHighlight = function(state, question) {
  const answer = question.answer.answer
  const answer_marked = "<mark class='marked'>" + answer + "</mark>";
  if (state.rawPassage.includes(answer_marked)) {
    state.rawPassage = state.rawPassage.replace(answer_marked, answer);
    const psg = document.getElementsByClassName('passage')[0];
    psg.innerHTML = state.rawPassage;
  }
};


// `trash can` button
const removeQuestion = function(state, question) {
  state.questions = state.questions.filter(q => q !== question);
  
  removeHighlight(state, question);
};

// example button
const runExample = async function(state, example) {
  const ex = state.examples[example];
  state.questions = [];
  state.passage = ex.passage;
  state.rawPassage = '';
  state.queryIsSent = true;
  for(let i = 0; i < ex.questions.length; i += 1) {
    let answer = {}
    await query(ex.questions[i], ex.passage)
      .then(function(res) {
        answer.answer = res.data.answer;
        answer.score = res.data.score;
        answer.start = res.data.start;
        answer.end = res.data.end;
        state.questions[i] = new Question({
            q: ex.questions[i],
            answer: answer,
        })
      }).catch((error) => console.error(error));
  }
};

// play button
const sendQuestion = function(state, question) {
  if(state.passage.length > 0 && question.q.length > 0) {
    if(question.answer.answer === ''){
      query(question.q, state.passage)
        .then(function(res) {
          question.answer = res.data;
          question.answer.isVisible = true;
        })
        .catch((error) => console.error(error))
      state.queryIsSent = true;
    } 
  } else {
    alert('Question field must not be empty!')
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
    alert('All fields must be filled')
  }
};

// edit passage before sending a query
const updatePassage = function(state, psg) {
  state.passage = psg;
  state.rawPassage = psg;
};

const updateQuestion = function(state, props) {
  const question = state.questions[props.id]
  removeHighlight(state, question);
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
