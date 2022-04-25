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
            <div class='row'>
              <!-- `add` button -->
              <div class='col-1'>
                <div class='column justify-center'>
                  <div>
                    <q-btn
                      outline
                      round
                      size='sm'
                      icon='img:add.svg'
                      @click.prevent='addQuestion()'
                    />
                  </div>
                </div>
              </div>
              <!-- `run all` button -->
              <div class='col-3'>
                <div class='column justify-center'>
                  <q-btn
                    outline
                    icon-right='img:run.svg'
                    label='Run all'
                    no-caps
                    @click='sendQuestions()'
                  />
                </div>
              </div>
            </div>
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
                <!-- `remove` button -->
                <q-btn
                  round
                  size='sm'
                  icon='img:delete.svg'
                  @click='removeQuestion(question)'
                />
                <!-- `run` button -->
                <q-btn
                  round
                  size='sm'
                  icon='img:run.svg'
                  @click='sendQuestion(question)'
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
                    autogrow
                    :label='`Q` + (id + 1) + `:`'
                  />
                  <!-- answer -->
                  <div
                    :class="{
                      'col-10': questions.length > 1,
                      'col-12': questions.length === 1
                    }"
                    v-show='question.answer.answer.length > 0'
                  >
                    <div>
                      {{ question.answer.answer }}
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
.icona {
  width: 50px;
  height: 50px;
}
.icona:hover {
 fill: black;
}
</style>
