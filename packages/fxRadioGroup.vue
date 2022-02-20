<template>
  <div class="fx-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "fxRadioGroup",
  provide() {
    return {
      radioGroup: this
    }
  },
  props: {
    modelValue: null
  },
  setup() {

  }
}
</script>

<style scoped>

</style>