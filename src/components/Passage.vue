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
      <!-- passage -->
      <div class='col-12'>
        <Component :is="queryIsSent ? 'PlainText' : 'QuasarTextArea'" :questions='questions' />
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
      'questions',
    ])
  },
  methods: {
    ...mapMutations([
      'editPassage',
      'updatePassage'
    ]),
  }
}
</script>

<style scoped>
</style>
