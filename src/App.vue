<template>
<div class='container'>
  <!-- passage section -->
  <div class='q-px-xl q-py-md'>
    <passage-component />
  </div>
  <!-- question-answer section-->
  <div class='q-px-xl q-py-md'>
    <questions  />
  </div>
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
  },
  methods: {
    query,
  }
}
</script>

<style lang='scss'>
</style>