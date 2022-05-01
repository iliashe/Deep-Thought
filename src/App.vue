<template>
<div class='container'>
  <q-form @submit='onSubmit'>
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
  </q-form>
</div>
</template>

<script>
import Examples from './components/Examples.vue';
import Passage from './components/Passage.vue';
import Questions from './components/Questions.vue';
import { mapMutations, mapState } from 'vuex';
import { Notify } from 'quasar';

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
    ]),
    onSubmit() {
      console.log('form sent')
      Notify.create({
        type: 'positive',
        timeout: 4000,
        message: 'Form submitted!'
      })
    },
  },
}
</script>

<style lang='scss'>
</style>