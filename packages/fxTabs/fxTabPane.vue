<template>
  <div v-show="name == activeKey">
    <slot :item="disabled"></slot>
  </div>
</template>

<script>
import {inject, ref, toRefs, watch,onBeforeMount} from "vue";

export default {
  name: "fxTabPane",
  props:{
    // 用于展示，可重复
    label:{
      type:[String,Number],
      require:true
    },
    // 唯一标示，用于切换标签
    name:{
      type:[String,Number],
      require: true
    },
    // 是否禁用
    disabled:{
      type:Boolean,
      default:false,
    }
  },
  setup(props,context){

    const activeKey = inject('act')

    return {
      activeKey
    }
  }
}
</script>

<style lang="scss" scoped>

</style>