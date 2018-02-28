<template>
  <button type='button' @click='click'>
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    click(e){
      this.$emit('click', e)
    },
  },
}
</script>

<style scoped>
</style>
