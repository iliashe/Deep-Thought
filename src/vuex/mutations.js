import Question from '../js/classes/question';
import query from '../js/api/query';

const addQuestion = function(state) {
  state.questions.push(new Question())
};

const clear = function(state) {
  state.passage = '';
  state.questions = [new Question()];
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
  clear,
  removeQuestion,
  runExample,
  sendQuestion,
  sendQuestions,
  updatePassage,
  updateQuestion,
}