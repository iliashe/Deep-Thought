<template>
<div class='row'>
  <!-- question buttons -->
  <div class='col-xs-2 col-lg-1' v-if='questions.length > 1'>
    <div class='row'>
      <!-- `remove` button -->
      <div>
        <q-btn
          round
          size='sm'
          icon='img:delete.svg'
          @click.prevent='removeQuestion(question)'
        />
      </div>
      <!-- `run` button -->
      <div class='q-pl-sm'>
        <q-btn
          round
          size='sm'
          icon='img:run.svg'
          @click='sendQuestion(question)'
          type='submit'
        />
      </div>
    </div>
  </div>
  <!-- question + answer -->
  <div
    :class="{
      'col-10 col-lg-11': questions.length > 1,
      'col-12': questions.length === 1
    }"
  >
    <div class='column'>
      <div class='col-12'>
        <!-- question input -->
        <q-input
          ref='QRef'
          v-model.trim='qtn'
          @change='updateQuestion({ q: qtn, id: id })'
          lazy-rules
          :rules="[val => !!val || 'Please, enter a question']"
          :label='`Q` + (questions.length - id ) + `:`'
          filled
          autogrow
        />
        <!-- answer -->
        <div
          class='col-12'
          v-show='question.answer.answer.length > 0'
        >
          <div class='q-pa-sm'>
            <!-- answers header -->
            <div class='row justify-between'>
              <div> Answer: </div>
              <!-- buttons -->
              <div class='row'>
                <div class='q-pr-sm'>
                  <!-- `highlight` button -->
                  <q-btn
                    round
                    size='sm'
                    icon='img:highlight.svg'
                    @click.prevent='highlightAnswer(question)'
                  />
                </div>
                <div>
                  <!-- `show or hide answer` button -->
                  <q-btn
                    round
                    class=''
                    size='sm'
                    :icon="question.answer.isVisible ? 'img:hide.svg' : 'img:show.svg'"
                    @click.prevent='toggleAnswer()'
                  />
                </div>
              </div>
            </div>
            <!-- answers body -->
            <div v-if='question.answer.isVisible'>
              <transition name='fade'>
                <div class='row items-baseline'>
                  <h6 class='col-3'>
                   {{ question.answer.answer }}
                  </h6>
                  <div class='col-xs-12 col-md-7' v-show='question.answer.isRelevant === false'>
                    <div class='column'>
                      <h6 class='warning'>
                        Unfortunately, the answer is no longer relevant :(
                      </h6>
                      <p class='hint'>
                        Please, update or run the question again!
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'question-component',
  data() {
    return {
      qtn: this.question.q,
    };
  },
  props: {
    question: Object,
    id: Number,
  },
  computed: {
    ...mapState(['questions'])
  },
  emits: ['answer-show-hide'],
  methods: {
    toggleAnswer() {
      this.$emit('answer-show-hide')        
    },
    ...mapMutations([
      'highlightAnswer',
      'removeQuestion',
      'sendQuestion',
      'updateQuestion',
    ])
  }
}
</script>

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
