<template>
<div class='container'>
  <div class='q-pa-sm'>
    <div class='row'>
      <!-- header -->
      <header class='col-12 q-pb-md'>
        <div class='row items-baseline justify-between'>
          <div class='col-12 col-md-3 col-lg-2'>
            <div class='row justify-between items-baseline'>
              <!-- label -->
              <div class=''>
                <span class=''>Enter your question(s)</span>
              </div>
              <!-- `add` button -->
              <div class=''>
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
          <div class='col-12 col-xs-9 col-sm-6 col-md-5 col-lg-4'>
            <div class='row justify-between items-center'>
              <!-- `remove all` button -->
              <div class='row col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <q-btn
                  outline
                  class='delete-btn col-12'
                  size='sm'
                  icon-right='img:delete.svg'
                  label='Remove all'
                  no-caps
                  @click='clearQuestions()'
                />
              </div>
              <!-- `run all` button -->
              <div class='row col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <q-btn
                  outline
                  size='sm'
                  class='col-12'
                  icon-right='img:run.svg'
                  label='Run all'
                  no-caps
                  @click='sendQuestions()'
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- questions -->
      <div class='col-12' >
        <ul class='question'>
          <!-- question container -->
          <transition-group name='fade'>
            <li
              class='q-pb-md' 
              v-for='(question, id) in questions'
              :key='question'
            >
              <!-- question row -->
              <Suspense>
                <!-- main content -->
                <question
                  :question='question'
                  :id='id'
                  @answer-show-hide='question.answer.isVisible = !question.answer.isVisible'
                />
                <!-- loading state -->
                <template #fallback>
                  loading...
                </template>
              </Suspense>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Question from './Question.vue';

export default {
  name: 'question-section',
  components: {
    Question,
  },
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
      'clearQuestions',
      'sendQuestions',
    ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;  
}

.fade-leave-active {
  position: absolute;
}

/* if we want to push questions smoothly to the beginning of the list */
.fade-move {
  transition: all 0.25s linear;
}
</style>
