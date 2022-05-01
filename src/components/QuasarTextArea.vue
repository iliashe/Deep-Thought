<template>
  <q-input
    v-model.trim='psg'
    @change='updatePassage(psg)'
    lazy-rules
    :rules="[val => !!val || 'Field is required']"
    type='textarea'
    filled
  />
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'quasar-textarea',
  data() {
    return {
      psg: this.$store.state.passage,
    }
  },
  computed: {
    ...mapState([
      'passage',
    ])
  },
  methods: {
    ...mapMutations([
      'updatePassage'
    ]),
  }
}
</script>
