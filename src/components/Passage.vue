<template>
<div class='container'>
  <div class='row'>
    <!-- label -->
    <header class='col-12'>
      <p>Paste your Passage</p>
    </header>
    <!-- text area -->
    <div class='col-12'>
      <q-input
        v-model='psg'
        @change='updatePassage(psg)'
        filled
        type='textarea'
      />
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'passage-component',
  data() {
    return {
      psg: '',
    }
  },
  methods: {
    ...mapMutations(['updatePassage']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
