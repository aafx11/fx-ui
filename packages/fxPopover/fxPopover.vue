<template>
  <div class="ref-wrapper" v-display="trigger">
    <slot></slot>
    <transition>
      <div class="content-wrapper" :class="[position]">
        <div class="fx-title-wrapper" :class="$slots.title ? '' : 'fx-title-bg'">
          <div :class="$slots.title ? '' : 'fx-title'">
            <slot name="title">
              <div>{{ titleText }}</div>
            </slot>
          </div>
        </div>
        <div :class="$slots.content ? '' : 'fx-content-wrapper'">
          <slot name="content">
            <div>{{contentText}}</div>
          </slot>
        </div>
      </div>
    </transition>
    <!--    <div class="arrow" :class="[arrow_position]"></div>-->
  </div>

</template>

<script>
import {computed, toRefs, useSlots} from "vue";
import display from "./display.js";

export default {
  name: "fxPopover",
  directives: {
    display
  },
  props: {
    placement: {
      type: String,
      default: 'top' //位置top,left,bottom,right
    },
    trigger: {
      type: String,
      default: 'hover' //触发方式hover,focus,click
    },
    titleText: {
      type: String,
      default: '标题'
    },
    contentText: {
      type: String,
      default: '内容'
    }
  },
  setup(props) {
    // !!useSlots().title，可以用来判断插槽是否使用
    const {placement} = toRefs(props)

    // 内容位置
    const position = computed(() => {
      return {
        "top": placement.value === 'top',
        "left": placement.value === 'left',
        "bottom": placement.value === 'bottom',
        "right" : placement.value === 'right'
      }
    })

    // 三角形位置
    // const arrow_position = computed(() => {
    //   return {
    //     "arrow-top": placement.value === 'top'
    //   }
    // })

    return {
      position,
      // arrow_position
    }
  }

}
</script>

<style scoped>
/*内容和提示*/
.ref-wrapper {
  position: relative;
  display: inline-block;

}

.content-wrapper {
  position: absolute;
  min-width: 170px;
  padding: 0px;
  border: 1px solid #909090;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  z-index: 20;
  display: none;
}

/*标题*/
.fx-title-wrapper {
  border-bottom: 1px solid #f0f0f0;
}
.fx-title-bg {
  background-color: #fff;
}

.fx-title {
  padding: 8px;
  font-size: 16px;
}

/*内容*/
.fx-content-wrapper {
  padding: 8px;
  font-size: 14px;
  background-color: #fff;

}

/*位置样式*/
.top {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -10px);
  z-index: 20;
}

.left {
  top: 50%;
  right: 100%;
  transform: translate(-10px, -50%);
}
.bottom{
  top: 100%;
  right: 50%;
  transform: translate(50%, 10px);

}
.right{
  left: 100%;
  top: 50%;
  transform: translate(10px,-50%);
}
/*三角形*/
.arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #fff;
}

.arrow-top {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.top::after {
  content: "";
  border-top: solid 10px #909090;
  border-left: solid 5px #00800000;
  border-right: solid 5px #00800000;
  border-bottom: solid 0px #00800000;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
}

.left::after {
  content: "";
  border-top: solid 5px #00800000;
  border-left: solid 10px #909090;
  border-right: solid 0px #00800000;
  border-bottom: solid 5px #00800000;
  position: absolute;
  left: 100%;
  transform: translateY(-50%);
  top: 50%;
}

.bottom::after{
  content: "";
  border-bottom: solid 10px #909090;
  border-top: solid 0px #00800000;
  border-left: solid 5px #00800000;
  border-right: solid 5px #00800000;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
}
.right::after{
  content: "";
  border-right: 10px solid #909090;
  border-top: 5px solid #00800000;
  border-bottom: 5px solid #00800000;
  border-left: 0px solid #00800000;
  position: absolute;
  right: 100%;
  transform: translateY(50%);
  bottom: 50%;
}
</style>