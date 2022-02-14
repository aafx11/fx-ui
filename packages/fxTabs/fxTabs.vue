<template>
  <div :class="[
      'fx-tabs',
      {
        'fx-tabs-vertical':tabPosition == 'column'
      }
  ]" :style="{
    width:tabPosition == 'column' ? '120px' : '100%'
  }">
    <!--标签-->
    <ul class="fx-nav" :class="[{
      'vertical':tabPosition == 'column'
    }]">
      <li
          class="fx-nav-item"
          :class="[{
            'active':activeKey == item.name,
            'ban':item.disabled == '' || item.disabled
          }]"
          :style="{
            borderBottomColor:activeKey == item.name ? '#1890ff' : 'transparent'
          }"
          v-for="item in navList"
          :key="item.name"
          @click="handClick($event,item.name,item.disabled)"
      >
        {{ item.label }}
      </li>
    </ul>
    <!--内容展示区域-->
    <slot></slot>
  </div>
</template>

<script>
import {onMounted, ref, useSlots, provide, computed} from "vue";

export default {
  name: "fxTabs",
  props: {
    defaultKey: {
      type: String,
      require: true
    },
    tabPosition:{
      type:String,
      default:'row' //row,column
    }
  },
  provide() {
    return {
      act: computed(() => this.activeKey)
    }
  },
  setup(props, context) {

    // 初始化选项卡
    const navList = ref([])
    const init = () => {
      useSlots().default().map(item => {

        navList.value.push({
          label: item.props.label,
          name: item.props.name,
          disabled:item.props.disabled
        })

      })
    }

    onMounted(() => {
      init()
    })

    // 初始化默认选项,父组件控制activeKey值，并provide给子组件，子组件通过name与该值对比
    const activeKey = ref('');
    activeKey.value = props.defaultKey;

    // 选择显示的内容
    const handClick = (e, name,disabled) => {

      if (disabled == '' || disabled) {
        return;
      }
      activeKey.value = name;

      // context.emit('input', name);
      context.emit('tab-click', e,name)
    }


    return {
      navList,
      activeKey,
      handClick
    }
  },
}
</script>

<style lang="scss" scoped>
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.fx-tabs {
  width: 100%;

  .fx-nav {
    //width: 100%;
    border-bottom: 1px solid #cdcccc;
    display: flex;
    align-items: center;

    .fx-nav-item {
      cursor: pointer;
      padding: 7px 10px;
      border-bottom: 2px solid transparent;
      transition: all .5s;
    }
  }
}

// 垂直状态
.fx-tabs-vertical{
  display: flex;
}
.vertical{
  flex-direction: column;
}
// 选中特效
.active {
  color: #1890ff;
}

// 禁用样式
.ban {
  color: #00000040;
  cursor: not-allowed!important;
}
</style>