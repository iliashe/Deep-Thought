import Question from '../js/classes/question';
import query from '../js/api/query';

const addQuestion = function(state) {
  state.questions.push(new Question())
};

const removeQuestion = function(state, question) {
  state.questions = state.questions.filter(q => q !== question)
};

const sendQuestion = function(state, question) {
  if(state.passage.length > 0) {
    query(question.q, state.passage)
      .then(function(res) {
        question.answer = res.data.answer;
      })
      .catch((error) => console.error(error))
  }
};

const sendQuestions = function(state) {
  // questions without answer
  const questions = state.questions.filter(q => q.answer === '')
  if(state.passage.length > 0) {
    for(const question of questions) {
      query(question.q, state.passage)
        .then(function(res) {
          question.answer = res.data.answer;
        })
        .catch((error) => console.error(error))
    } 
  }
};

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
  removeQuestion,
  sendQuestion,
  sendQuestions,
  updatePassage,
  updateQuestion,
}
