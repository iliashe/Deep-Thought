<template>
<div class='row'>
  <!-- question buttons -->
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
          filled
          autogrow
          class='scroll'
          @change='updateQuestion({ q: getQ(id), id: id })'
          :modelValue='question.q'
          :rules="[val => !!val || 'Field is required']"
          :label='`Q` + (id + 1) + `:`'
        />
        <!-- answer -->
        <div
          :class="{
            'col-10': questions.length > 1,
            'col-12': questions.length === 1
          }"
          outlined
          v-show='question.answer.answer.length > 0'
        >
          <div class='q-pa-sm'>
            <!-- answers header -->
            <div class='row justify-between'>
              <div> Answer: </div>
              <!-- buttons -->
              <div>
                <q-btn
                  round
                  size='sm'
                  icon='img:highlight.svg'
                  @click='highlightAnswer(question)'
                />
                <q-btn
                  round
                  size='sm'
                  :icon="question.answer.isVisible ? 'img:hide.svg' : 'img:expand.svg'"
                  @click='showOrHideAnswer()'
                />
              </div>
            </div>
            <!-- answers body -->
            <transition name='fade'>
              <div v-if='question.answer.isVisible'>
                <div class='row items-baseline'>
                  <h6>
                   {{ question.answer.answer }}
                  </h6>
                </div>
              </div>
            </transition>
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
  props: {
    question: Object,
    id: Number,
  },
  computed: {
    ...mapState(['questions'])
  },
  emits: ['answer-show-hide'],
  methods: {
    getQ (id) {
      const question = document.getElementsByClassName('question')[0];
      const q = question.getElementsByTagName('textarea')[id]
      return q.value;
    },
    showOrHideAnswer(){
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
