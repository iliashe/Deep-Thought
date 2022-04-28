<template>
<div class='container'>
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
    <questions  />
  </div>
</div>
</template>

<script>
import Examples from './components/Examples.vue';
import Passage from './components/Passage.vue';
import Questions from './components/Questions.vue';
import { mapMutations, mapState } from 'vuex';

export default {
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
      'sendQuestions'
    ])
  },
}
</script>

<style lang='scss'>
</style>