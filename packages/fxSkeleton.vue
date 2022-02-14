<template>
  <div class="fx-ske" :style="ske_article" :class="[{
    'active':active
  }]">
<!--    <div class="fx-ske">-->
    <template v-if="type == '1'">
      <div class="fx-title" ></div>
      <div class="fx-row" v-for="(item,index) in rowNumber" :index="index == 0? '0' : '1'"></div>
    </template>
    <template v-else-if="type == '2'">
      <div class="fx-ske-wrapper">
        <div class="fx-avatar"></div>
        <div class="fx-content">
          <div class="fx-title"></div>
          <div class="fx-row" v-for="(item,index) in rowNumber" :index="index == 0? '0' : '1'"></div>
        </div>
      </div>
    </template>
    <template v-else-if="type == '3'">
      <div class="fx-ske-article">
        <div class="fx-article-img"></div>
        <div class="fx-article-content">
          <div class="fx-title"></div>
          <div class="fx-row" v-for="(item,index) in rowNumber" :index="index == 0? '0' : '1'"></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {computed, onBeforeMount, ref} from "vue";

export default {
  name: "fxSkeleton",
  props: {
    type: {
      type: [String, Number],
      default: '1'
    },
    rows: {
      type: [String, Number],
      default: 3
    },
    // 只有在样式3，文章面板样式才会生效
    width: {
      type: [String, Number],
      default: 300
    },
    // 是否显示动画
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    // 初始化横条数量
    const rowNumber = ref([])
    const initRows = () => {
      for (let i = 0; i < props.rows; i++) {
        rowNumber.value.push({})
      }
    }

    // 样式3，文章面板样式
    const ske_article = computed(() => {
      return {
        'width': props.type == '3' ? props.width + 'px' : ''
      }
    })
    onBeforeMount(() => {
      initRows();
    })
    return {
      rowNumber,
      ske_article,
    }
  }
}
</script>

<style lang="scss" scoped>
$grey: #ededed;
.fx-ske {
  width: 100%;
  ming-height: 150px;

  // 基础样式
  .fx-title {
    width: 36%;
    height: 16px;
    background-color: $grey;
    border-radius: 5px;
    margin-top: 10px;
  }

  .fx-row {
    width: 100%;
    height: 18px;
    background-color: $grey;
    border-radius: 5px;
  }

  .fx-row[index='0'] {
    margin-top: 25px;
  }

  .fx-row[index='1'] {
    margin-top: 15px;
  }

  .fx-row:last-child {
    width: 56%;
  }

  // 样式2，带头像
  .fx-ske-wrapper {
    width: 100%;
    height: 100%;
    display: flex;

    .fx-avatar {
      width: 50px;
      height: 50px;
      background-color: $grey;
      border-radius: 50%;
    }

    .fx-content {
      width: 100%;
      padding-left: 15px;
    }
  }

  // 样式3，文章面板
  .fx-ske-article {
    width: 100%;
    min-height: 250px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .12);

    .fx-article-img {
      width: 100%;
      height: 100px;
      background-color: $grey;
    }

    .fx-article-content {
      padding: 20px 15px;
    }
  }
}

// 动画样式
.active .fx-title,
.active .fx-row,
.active .fx-avatar,
.active .fx-article-img{
  background: linear-gradient(
          100deg,
          rgba(255,255,255,0) 40%,
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255,255,255,0) 60%
  ) $grey;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

</style>