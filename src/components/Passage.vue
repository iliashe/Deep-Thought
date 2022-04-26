<template>
<div class='container'>
  <div class='q-pa-sm'>
    <div class='row'>
      <!-- label -->
      <header class='col-12'>
        <div class='row'>
          <p>Paste your Passage</p>
          <q-btn outline label='Edit' icon-right='img:edit.svg' @click='editPassage()'/>
        </div>
      </header>
      <!-- text area -->
      <div class='col-12'>
        <q-input
          v-if='!queryIsSent'
          class='passage'
          @change='updatePassage(getPassage())'
          :modelValue='passage'
          filled
          type='textarea'
        />
        <p class='passage' v-if='queryIsSent'>
          {{ highlightAnswer() }}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'passage-component',
  computed: {
    ...mapState([
      'queryIsSent',
      'passage'
    ])
  },
  methods: {
    ...mapMutations([
      'editPassage',
      'highlightAnswer',
      'updatePassage'
    ]),
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
