<template>
<div class='container'>
  <q-form @submit.prevent='allQuestions ? sendQuestions() : sendQuestion(questionToSend)'>
    <!-- examples section-->
    <div class='q-px-xl q-py-md'>
      <examples />
    </div>
    <!-- passage section -->
    <div class='q-px-xl q-py-md'>
      <passage />
    </div>
    <!-- question-answer section-->
    <div class='q-px-xl q-py-md'>
      <questions @one-question='sendOneQuestion' @all-questions='sendAllQuestions'/>
    </div>
  </q-form>
</div>
</template>

<script>
import Examples from './components/Examples.vue';
import Passage from './components/Passage.vue';
import Questions from './components/Questions.vue';
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      allQuestions: true,
      questionToSend: {},
    };
  },
  components: {
    Examples,
    Passage,
    Questions,
  },
  computed: {
    ...mapState([
      'questions',
      'passage',
    ]),
  },
  methods: {
    ...mapMutations([
      'sendQuestion',
      'sendQuestions'
    ]),
    sendOneQuestion(question) {
      this.allQuestions = false;
      this.questionToSend = question;
    },
    sendAllQuestions() {
      this.allQuestions = true;
    }
  },
}
</script>

<style lang='scss'>
</style>