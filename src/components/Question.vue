<template>
<div class='container'>
  <div class='row'>
    <!-- header -->
    <header class='col-12'>
      <div class='q-pa-sm'>
        <div class='row'>
          <!-- label -->
          <div class='col-3'>
            <div class='column justify-center'>
              <span style='display: block' class=''>Enter your question(s)</span>
            </div>
          </div>
          <!-- buttons -->
          <div class='col-9'>
            <!-- `add` button -->
            <q-btn
            round
            icon='img:add.svg'
            color='light-blue-6'
            @click.prevent='addQuestion()'
            />
            <!-- `run all` button -->
            <q-btn
            color='light-blue-6'
            icon-right='img:play.svg'
            label='Run all'
            no-caps
            @click='sendQuestions()'
            />
          </div>
        </div>
      </div>
    </header>
    <!-- questions -->
    <div class='col-12' >
      <ul class='question'>
        <!-- question container -->
        <li
          class='q-pa-sm' 
          v-for='(question, id) in questions'
          :key='question.q'
        >
          <!-- question row -->
          <div class='row'>
            <!-- buttons -->
            <div class='col-2' v-if='questions.length > 1'>
              <div>
                <!-- `run` button -->
                <q-btn
                  round
                  color='light-blue-6'
                  icon='img:play.svg'
                  @click='sendQuestion(question)'
                />
                <!-- `remove` button -->
                <q-btn
                  round
                  color='light-blue-6'
                  icon='img:remove.svg'
                  @click='removeQuestion(question)'
                />
                <!-- `expand` button -->
                <q-btn
                  round
                  color='light-blue-6'
                  icon='img:expand-less.svg'
                />
              </div>
            </div>
            <!-- question + answer -->
            <div
              :class="{
                'col-10': questions.length > 1,
                'col-12': questions.length === 1
              }"
            >
              <div class='column'>
                <div
                :class="{
                  'col-10': questions.length > 1,
                  'col-12': questions.length === 1
                }"
              >
                <!-- question input -->
                <q-input
                @change='updateQuestion({ q: getQ(id), id: id })'
                :modelValue='question.q'
                filled
                type='textarea'
                />
                <!-- answer -->
                <div
                :class="{
                  'col-10': questions.length > 1,
                  'col-12': questions.length === 1
                }"
                v-show='question.answer.length > 0'
              >
                <div>
                  {{ question.answer }}
                </div>
                </div>
                </div>
              </div>
            </div>
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
  methods: {
    getQ (id) {
      const question = document.getElementsByClassName('question')[0];
      const q = question.getElementsByTagName('textarea')[id]
      return q.value;
    },
    ...mapMutations([
      'addQuestion',
      'sendQuestion',
      'sendQuestions',
      'updateQuestion',
      'removeQuestion',
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
