<template>
<div class='container'>
  <div class='q-pa-sm'>
    <div class='row'>
      <!-- label -->
      <header class='col-12 q-pb-md'>
        <div class='row items-baseline justify-between'>
          <div class=''>
            <span>Paste your Passage</span>
          </div>
          <q-btn
            no-caps
            outline
            size='sm'
            label='Edit'
            icon-right='img:edit.svg'
            @click='editPassage()'
          />
        </div>
      </header>
      <!-- text area -->
      <div class='col-12'>
        <q-input
          label='Passage'
          v-if='!queryIsSent'
          class='passage'
          @change='updatePassage(getPassage())'
          :modelValue='passage'
          :rules="[val => !!val || 'Field is required']"
          filled
          type='textarea'
        />
        <p outline class='passage' v-if='queryIsSent'>
          {{ passage }}
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
      'passage',
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

<style scoped>
</style>
