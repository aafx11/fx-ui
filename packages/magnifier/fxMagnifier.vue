<template>
  <div class="fx-img-wrapper" :style="img_wrapper_style">
    <a
        class="fx-mag-wrapper"
        :href="link"
        :target="blank ? '_blank':''"
        :style="mag_wrapper_style"
    >
      <img class="fx-mag-img" :src="imgUrl" :alt="imgAlt" :style="mag_img_style">
<!--      <img class="fx-mag-img" src="../../examples/assets/logo.png" :alt="imgAlt" :style="mag_img_style">-->
    </a>
    <a class="fx-img-link" :href="link">
      <img class="fx-static-img" :src="imgUrl" :alt="imgAlt">
    </a>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "fxMagnifier",
  props: {
    imgWidth: {
      type: Number,
      // request: true
      default: 375
    },
    imgHeight: {
      type: Number,
      // request: true
      default:500
    },
    magWidth: {
      type: Number,
      // request: true
      default: 150
    },
    magHeight: {
      type: Number,
      // request: true
      default: 150
    },
    link: {
      type: String,
      // request: true
    },
    imgUrl: {
      type:String,
      // request: true
    },
    blank: {
      type:Boolean,
      default:false
    },
    imgAlt:{
      type:String,
    }
  },
  setup(props, ctx) {

    // 图片样式
    let img_wrapper_style = computed(() => {
      return {
        width: props.imgWidth + 'px',
        height: props.imgHeight + 'px'
      }
    })

    // 放大镜样式
    let mag_wrapper_style = computed(() => {
      return {
        width: props.magWidth + 'px',
        height: props.magHeight + 'px'
      }
    })

    // 放大后的图片样式
    let mag_img_style = computed(()=>{
      return {
        width: props.imgWidth + 'px',
        height: props.imgHeight + 'px'
      }
    })

    return {
      img_wrapper_style,
      mag_wrapper_style,
      mag_img_style,

    }
  }
}
</script>

<style lang="scss" scoped>
.fx-img-wrapper{
  position: relative;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;

  .fx-static-img{
    width: 100%;
  }

  .fx-mag-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    overflow: hidden;
    display: none;

    &.show {
      display: block;
      transform: scale(1.5);
    }

    .fx-mag-img {
      position: absolute;
      top: 0;
      left: 0;

    }
  }
}
</style>