import { createStore } from 'vuex';
import mutations from './mutations';
import Question from '../js/question';

export default createStore({
  state: {
    questions: [
      new Question({
        q: '',
      }),
    ],
    passage: '',
  },

  mutations,
})
