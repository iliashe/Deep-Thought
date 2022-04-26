<template>
<div class='container'>
  <div class='q-pa-sm'>
    <div class='row'>
      <!-- label -->
      <h6 class='col-12'>Try out with these examples</h6>
      <!-- buttons -->
      <div class='col-12'>
        <div class='row'>
          <q-btn outline label='Food' @click='runExample(0)'/>
          <q-btn outline label='Electronics' @click='runExample(1)'/>
          <q-btn outline label='Techn. Manual' @click='runExample(2)'/>
          <q-btn outline label='Clear' icon-right='img:refresh.svg' @click='clear()'/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations} from 'vuex';

export default {
  name: 'examples-component',
  methods: {
    ...mapMutations([
      'clear',
      'runExample'
    ])
  }
}
</script>
