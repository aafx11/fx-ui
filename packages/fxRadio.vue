<template>
  <label class="fx-radio" :class="{'is-checked' : label === model}">
    <span class="fx-radio-input">
      <!--圆-->
      <span class="fx-radio-inner"></span>
      <!--用于保存name，样式上隐藏 -->
      <input
          type="radio"
          :value="label"
          :name="name"
          v-model="model"
          class="fx-radio-original"
      >
    </span>
    <span class="fx-radio-label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script>
import {computed, inject} from "vue";

export default {
  name: "fxRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    modelValue: null,
    name: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const model = computed({
      get() {
        return isGroup.value ? radioGroup.modelValue : props.modelValue
      },
      set(value) {
        // 输出新修改的值
        // context.emit('update:modelValue', value)
        isGroup.value ? radioGroup.$emit('update:modelValue',value) : context.emit('update:modelValue', value)
      }
    })

    // 判断有没被radioGroup组件包裹
    const radioGroup = inject('radioGroup', '')

    const isGroup = computed(() => {
      return !!radioGroup;
    })
    return {
      model
    }
  }
}
</script>

<style lang="scss" scoped>
.fx-radio {
  position: relative;
  cursor: pointer;
  color: #606266;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  .fx-radio-input {
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    line-height: 1;
    vertical-align: middle;

    .fx-radio-inner {
      position: relative;
      cursor: pointer;
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";

      }
    }

    .fx-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .fx-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}

// 选中样式
.fx-radio.is-checked {
  .fx-radio-input {
    .fx-radio-inner {
      border-color: #409eff;
      background: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
</style>