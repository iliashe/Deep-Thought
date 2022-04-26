import Question from '../js/classes/question';
import query from '../js/api/query';

const addQuestion = function(state) {
  state.questions.push(new Question())
};

const clear = function(state) {
  state.passage = '';
  state.questions = [new Question()];
};

// edit passage after query was sent
const editPassage = function(state) {
    state.queryIsSent = false;
};

const highlightAnswer = function(state, question = '') {
  state.queryIsSent = true;
  const answer = question.answer.answer;
  const answer_marked = "<mark class='marked'>" + answer + "</mark>"
  const psg = document.getElementsByClassName('passage')[0];
  console.log(psg)
  console.log(psg.innerHTML.replace(answer, answer_marked))
  const psg_marked = psg.innerHTML.replace(answer, answer_marked)
  return psg_marked
}

const removeQuestion = function(state, question) {
  state.questions = state.questions.filter(q => q !== question)
};

const runExample = function(state, example) {
  state.questions = [];  
  const ex = state.examples[example];
  state.passage = ex.passage;
  for(let i = 0; i < ex.questions.length; i += 1) {
    state.questions[i] = new Question({
      q: ex.questions[i],
      answer: {
        answer: '',
        score: 0,
        start: 0,
        end: 0,
      }
    })
  }
  sendQuestions(state);
};

const sendQuestion = function(state, question) {
  if(state.passage.length > 0) {
    query(question.q, state.passage)
      .then(function(res) {
        question.answer = res.data;
      })
      .catch((error) => console.error(error))
    state.queryIsSent = true; 
  }
};

const sendQuestions = function(state) {
  // questions that were not answered yet
  const questions = state.questions.filter(q => q.answer.answer === '')
  if(state.passage.length > 0) {
    for(const question of questions) {
      console.log(question)
      query(question.q, state.passage)
        .then(function(res) {
          question.answer = res.data;
        })
        .catch((error) => console.error(error))
    }
    state.queryIsSent = true;
  }
};

// edit passage before sending a query
const updatePassage = function(state, psg) {
  state.passage = psg;
  // if passage was updated after a question was entered ????
};

const updateQuestion = function(state, props) {
  const question = state.questions[props.id]
  question.q = props.q;
};

export default {
  addQuestion,
  clear,
  editPassage,
  highlightAnswer,
  removeQuestion,
  runExample,
  sendQuestion,
  sendQuestions,
  updatePassage,
  updateQuestion,
}
