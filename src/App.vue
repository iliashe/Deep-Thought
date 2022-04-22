<template>
<div class='container'>
  <!-- passage -->
  <div class='q-pa-xl'>
    <passage-component />
  </div>
  <!-- question-answer -->
  <div class='q-pa-xl'>
    <question-component />
  </div>
</div>
</template>

<script>
import passageComponent from './components/Passage.vue';
import questionComponent from './components/Question.vue';
export default {
  components: {
    passageComponent,
    questionComponent,
  }
}
</script>

<style lang='scss'>
</style>