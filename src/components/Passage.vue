<template>
<div class='container'>
  <div class='q-pa-sm'>
    <div class='row'>
      <!-- label -->
      <header class='col-12'>
        <p>Paste your Passage</p>
      </header>
      <!-- text area -->
      <div class='col-12'>
        <q-input
          class='passage'
          @change='updatePassage(getPassage())'
          :modelValue='passage'
          filled
          type='textarea'
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'passage-component',
  data() {
    return {
      psg: '',
    }
  },
  computed: {
    ...mapState(['passage'])
  },
  methods: {
    ...mapMutations(['updatePassage']),
    getPassage() {
      const qInput = document.getElementsByClassName('passage')[0];
      const txtArea = qInput.getElementsByTagName('textarea')[0];
      return txtArea.value
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
