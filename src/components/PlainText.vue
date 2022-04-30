<template>
  <p class='raw-passage'>{{ passage }}</p>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState([
      'passage'
    ])
  }
}
</script>
