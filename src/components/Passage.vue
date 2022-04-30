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
          <div class='row col-12 col-xs-4 col-sm-3 col-md-2 col-lg-1'>
            <q-btn
              no-caps
              outline
              class='col-12'
              size='sm'
              label='Edit'
              icon-right='img:edit.svg'
              @click='editPassage()'
            />
          </div>
        </div>
      </header>
      <!-- text area -->
      <div class='col-12'>
        <Component :is="queryIsSent ? 'PlainText' : 'QuasarTextArea'" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import QuasarTextArea from './QuasarTextArea.vue';
import PlainText from './PlainText.vue';

export default {
  name: 'passage-component',
  data() {
    return {
      componentName: this.queryIsSent ? 'PlainText' : 'QuasarTextArea',
      passage: '',
    }
  },
  components: {
    QuasarTextArea,
    PlainText,
  },
  computed: {
    ...mapState([
      'queryIsSent',
//      'passage',
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
      return txtArea.value.split(' ').filter(s => s !== '').join(' ');
    },
  }
}
</script>

<style scoped>
</style>
