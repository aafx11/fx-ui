<template>
  <div class="fx-switch" :class="{'is-checked':modelValue}" @click="handleClick">
    <span class="fx-switch-core" ref="core">
      <span class="fx-switch-button"></span>
    </span>
    <input type="checkbox" class="fx-switch-input" :name="name" ref="input">
  </div>
</template>

<script>
import {ref,nextTick,onMounted} from "vue";

export default {
  name: "fxSwitch",
  props:{
    modelValue:{
      type:Boolean,
      default:false
    },
    activeColor:{
      type:String,
      default: ''
    },
    inactiveColor:{
      type:String,
      default: ''
    },
    name:{
      type:String,
      default:''
    }
  },
  setup(props,context){
    // 切换点击事件
    const handleClick = async () =>{
      // 修改父组件绑定的modelValue
      context.emit('update:modelValue',!props.modelValue)

      //等待dom更新完之后再执行回调
      await nextTick(()=>{
        initColor();
        input.value.checked = props.modelValue
      })
    }

    // 初始化开关颜色
    const core = ref(null)
    const input = ref(null)
    const initColor = () =>{
      if (props.activeColor || props.inactiveColor){
        let color = props.modelValue ? props.activeColor : props.inactiveColor
        core.value.style.borderColor = color
        core.value.style.backgroundColor = color
      }
    }

    onMounted(()=>{
      initColor();
      input.value.checked = props.modelValue
    })
    return {
      core,
      input,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.fx-switch{
  position: relative;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  .fx-switch-input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .fx-switch-core{
    position: relative;
    width: 40px;
    height: 20px;
    background-color: #dcdfe6;
    border: 1px solid #dcdfe6;
    outline: none;
    margin: 0;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    display: inline-block;
    
    .fx-switch-button{
      position: absolute;
      top: 1px;
      left: 1px;
      width: 16px;
      height: 16px;
      background-color: #fff;;
      border-radius: 100%;
      transition: all .3s;
      
    }
  }
}

// 选中状态
// .fx-switch.is-checked同时两个父类class,中间没有空格
.fx-switch.is-checked{
  .fx-switch-core {
    border-color: #409eff;
    background-color: #409eff;
    .fx-switch-button{
      transform: translateX(20px);
    }
  }
}
</style>