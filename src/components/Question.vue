<template>
<div class='container'>
  <div class='row'>
    <!-- header -->
    <header class='col-12'>
      <div class='row'>
        <p class='col-3'>Enter your question(s)</p>
        <q-btn
          round
          icon='img:white-plus.svg'
          color='light-blue-6'
          @click.prevent='addQuestion()'
        />
      </div>
    </header>
    <!-- text area -->
    <div class='col-12' >
      <ul class='question'>
        <li v-for='(question, id) in questions' :key='question.q'>
          <!-- question -->
          <q-input
            @change='updateQ({ q: getQ(id), id: id })'
            :modelValue='question.q'
            filled
            type='textarea'
          />
          <!-- answer -->
          <div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'question-component',
  computed: {
    ...mapState([
      'questions'
    ])
  },
  props: {
    answers: Object,
  },
  methods: {
    getQ (id) {
      const question = document.getElementsByClassName('question')[0];
      const q = question.getElementsByTagName('textarea')[id]
      return q.value;
    },
    ...mapMutations([
      'addQuestion',
      'updateQ',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
