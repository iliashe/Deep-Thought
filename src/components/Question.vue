<template>
<div class='container'>
  <div class='row'>
    <!-- label -->
    <header class='col-12'>
      <div class='row'>
        <p class='col-3'>Enter your question(s)</p>
        <q-btn
          round
          icon='img:white-plus.svg'
          color='light-blue-6'
        />
      </div>
    </header>
    <!-- text area -->
    <div class='col-12'>
      <q-input
        filled
        type='textarea'
      />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'question-component',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
