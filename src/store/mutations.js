import Question from '../js/classes/question';

const addQuestion = function(state) {
  state.questions.push(
    new Question({
      q: '',
    })
  )
};

const updatePassage = function(state, psg) {
  state.passage = psg;
}

const updateQ = function(state, props) {
  console.log(props.q, props.id)
  state.questions[props.id].q = props.q;
}

export default {
  addQuestion,
  updatePassage,
  updateQ,
}
