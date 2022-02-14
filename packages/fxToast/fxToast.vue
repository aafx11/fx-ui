<template>
  <div v-if="visible">qwe</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "fxToast",
  setup(){

    const visible = ref(false)
    const showToast = () => {
      visible.value = true
    }
      return {
        visible,
        showToast,
      }

  }
}
</script>

<style scoped>

</style>