<template>
<div class='container'>
  <div class='q-pa-sm'>
    <div class='row'>
      <!-- label -->
      <h6 class='col-12'>Try out with these examples</h6>
      <!-- buttons -->
      <div class='col-12'>
        <div class='row'>
          <q-btn outline class='col-12 col-md-3 col-lg-2' label='Food' @click='runExample(0)'/>
          <q-btn outline class='col-12 col-md-3 col-lg-2' label='Electronics' @click='runExample(1)'/>
          <q-btn outline class='col-12 col-md-3 col-lg-2' label='Techn. Manual' @click='runExample(2)'/>
          <q-btn outline class='col-12 col-md-3 col-lg-2 delete-btn' label='Clear' icon-right='img:refresh.svg' @click='clearAll()'/>
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
      'clearAll',
      'runExample'
    ])
  }
}
</script>
