<template>
  <div class="fx-input-wrapper" :class="showSuffix">
    <input
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :placeholder="placeholder"
        :name="name"
        :value="modelValue"
        :disabled="disabled"
        class="fx-input-inner"
        :class="{'is-disabled':disabled}"
        @input="handleInput"
    >
    <span class="fx-input-suffix" v-if="showSuffix">
      <i class="iconfont icon-shandiao" @click="clear" v-if="clearable && modelValue"></i>
      <i class="iconfont icon-xianshiyincang-1" @click="handlePassword" v-if="showPassword && passwordVisible"></i>
      <i class="iconfont icon-xianshiyincang-" @click="handlePassword" v-if="showPassword && !passwordVisible"></i>
    </span>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "fxInput",
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const handleInput = (e) => {
      context.emit('update:modelValue', e.target.value)
    }

    // 显示图标
    const showSuffix = computed(() => {
      return props.clearable || props.showPassword ? 'show-suffix' : ''
    })

    // 清空
    const clear = () => {
      context.emit('update:modelValue', '')
    }

    // 显示密码
    const passwordVisible = ref(false)
    const handlePassword = () => {
      passwordVisible.value = !passwordVisible.value;
    }
    return {
      showSuffix,
      passwordVisible,
      handleInput,
      clear,
      handlePassword,
    }
  }
}
</script>

<style lang="scss" scoped>
// 基础样式
.fx-input-wrapper {
  position: relative;
  width: 100%;
  font-size: 14px;
  display: inline-block;

  .fx-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    width: 100%;
    height: 35px;
    line-height: 35px;
    outline: none;
    padding: 0 15px;
    transition: border-color .3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #40a9ff;;

    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

// 显示图标
.show-suffix {
  .fx-input-inner {
    padding-right: 30px;
  }

  .fx-input-suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 35px;
    text-align: center;
    //color: #c0c4cc;
    transition: all .3s;
    z-index: 20;

    i {
      //color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: all .2s ease-in-out;
    }
  }
}
</style>