<template>
  <div class="fx-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "fxCheckboxGroup",
  provide(){
    return{
      checkboxGroup:this
    }
  },
  props:{
    modelValue:{
      type:Array
    }
  }
}
</script>

<style scoped>

</style>