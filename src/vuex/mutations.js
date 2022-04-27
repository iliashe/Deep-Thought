import Question from '../js/classes/question';
import query from '../js/api/query';

const addQuestion = function(state) {
  state.questions.push(new Question())
};

const clearAll = function(state) {
  state.passage = '';
  state.questions = [new Question()];
};

const clearQuestions = function(state) {
    state.questions = [new Question()];
};

// edit passage after query was sent
const editPassage = function(state) {
    state.queryIsSent = false;
};

const highlightAnswer = function(state, question) {
  // s.t. `p` tag instead of `textarea` would be displayed
  state.queryIsSent = true;
  const answer = question.answer.answer;
  const answer_marked = "<mark class='marked'>" + answer + "</mark>"
  const psg = document.getElementsByClassName('passage')[0];
  psg.innerHTML = state.passage.replace(answer, answer_marked);
}

const removeQuestion = function(state, question) {
  state.questions = state.questions.filter(q => q !== question)
};

const runExample = async function(state, example) {
  const ex = state.examples[example];
  state.questions = [];
  state.passage = ex.passage;
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

const sendQuestion = function(state, question) {
  if(state.passage.length > 0) {
    query(question.q, state.passage)
      .then(function(res) {
        question.answer = res.data;
        question.answer.isVisible = true;
      })
      .catch((error) => console.error(error))
    state.queryIsSent = true; 
  }
};

// run all button
const sendQuestions = function(state) {
  // questions that were not answered yet
  const questions = state.questions
  if(state.passage.length > 0) {
    for(const question of questions) {
      console.log(question)
      query(question.q, state.passage)
        .then(function(res) {
          question.answer = res.data;
          question.answer.isVisible = true;
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
