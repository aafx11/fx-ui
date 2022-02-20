<template>
  <label class="fx-checkbox" :class="{'is-checked':isChecked}">
    <span class="fx-checkbox-input">
      <span class="fx-checkbox-inner"></span>
      <input
          type="checkbox"
          class="fx-checkbox-original"
          :name="name"
          :value="label"
          v-model="model"
      >
    </span>
    <span class="fx-checkbox-label">
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
import {computed, inject} from "vue";

export default {
  name: "fxCheckbox",
  props:{
    modelValue:{
      type:Boolean,
      default:false
    },
    name:{
      type:String,
      default: ''
    },
    label:{
      type:String,
      default: ''
    }
  },
  setup(props,context){

    const model = computed({
      get() {
        return isGroup.value ? checkGroup.modelValue : props.modelValue
      },
      set(value) {
        // 输出新修改的值
        isGroup.value ? checkGroup.$emit('update:modelValue', value) : context.emit('update:modelValue', value)
      }
    })

    // 是否被checkboxGroup组件包裹
    const checkGroup = inject('checkboxGroup','')
    const isGroup = computed(()=>{
      return !!checkGroup
    })
    const isChecked = computed(()=>{
      return isGroup.value ? model.value.includes(props.label) : model.value
    })
    return{
      model,isChecked
    }
  }
}
</script>

<style lang="scss" scoped>
.fx-checkbox{
  position: relative;
  cursor: pointer;
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .fx-checkbox-input{
    position: relative;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1px;
    .fx-checkbox-inner{
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s ease-in,background-color .25s ease-in;
      &:after{
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .fx-checkbox-original{
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .fx-checkbox-label{
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;

  }
}

// 选中样式
.fx-checkbox.is-checked{
  .fx-checkbox-input{
    .fx-checkbox-inner{
      background-color: #409eff;
      background-color: #409eff;
      &:after{
       transform: rotate(45deg) scaleY(1);
      }
    }
    .fx-checkbox-label{
      color: #409eff;
    }
  }
}
</style>