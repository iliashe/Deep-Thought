<template>
<div class='container'>
  <!-- passage section -->
  <div class='q-pa-xl'>
    <passage-component />
  </div>
  <!-- question-answer section-->
  <div class='q-pa-xl'>
    <questions :answers='query(questions, passage)'/>
  </div>

  {{ query(questions, passage) }}
</div>
</template>

<script>
import passageComponent from './components/Passage.vue';
import Questions from './components/Question.vue';
import query from './js/api/query';
import { mapState } from 'vuex';

export default {
  components: {
    passageComponent,
    Questions,
  },
  computed: {
    ...mapState([
      'questions',
      'passage',
    ]),
    // api
  },
  methods: {
    query,
  }
}
</script>

<style lang='scss'>
</style>