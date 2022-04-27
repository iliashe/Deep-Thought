<template>
<div class='container'>
  <!-- examples section-->
  <div class='q-px-xl q-py-md'>
    <examples />
  </div>
  <!-- passage section -->
  <vee-form class='q-px-xl q-py-md'>
    <div class=''>
      <passage />
    </div>
    <!-- question-answer section-->
    <div class=''>
      <questions  />
    </div>
  </vee-form>
</div>
</template>

<script>
import Examples from './components/Examples.vue';
import Passage from './components/Passage.vue';
import Questions from './components/Questions.vue';
import query from './js/api/query';
import { mapState } from 'vuex';

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
    query,
  }
}
</script>

<style lang='scss'>
</style>