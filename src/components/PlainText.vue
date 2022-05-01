<template>
  <div v-html='markedPassage()'></div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'plain-text',
  data() {
    return { 
      passage:  this.$store.state.passage,
    } 
  },
  props: {
    questions: Array,
  },
  methods: {
    markedPassage() {
      const passage = this.$store.state.passage;
      const questionsWithMarkedAnswer = this.questions.filter(q => q.answer.isMarked);
      let passageWithMarkedAnswers = passage;
      for(const question of questionsWithMarkedAnswer) {
        const answer = question.answer.answer;
        const answer_marked = `<mark class='marked'>${answer}</mark>`
        passageWithMarkedAnswers = passageWithMarkedAnswers.replace(answer, answer_marked);
      }
      return `<p>${passageWithMarkedAnswers}</p>`
    },
  }
}
</script>
