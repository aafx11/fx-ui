<template>
  <div class="wrapper">
    <fx-input placeholder="请输入" type="password" disabled></fx-input>
    <fx-input v-model="user" clearable></fx-input>
    <fx-input v-model="password" show-password type="password"></fx-input>

    <button @click="test">123</button>
  </div>
</template>

<script>
import FxButton from "../packages/fxButton";
import FxMenu from "../packages/fxNav/treeMenu";
import FxMenuItem from "../packages/fxNav/menuItem";
import FxModal from "../packages/fxModal";
import FxPopover from "../packages/fxPopover/fxPopover";
import FxSelector from "../packages/Selector/fxSelector";
import {ref, watch} from "vue";
import FxMagnifier from "../packages/magnifier/fxMagnifier";
import FxTabPane from "../packages/fxTabs/fxTabPane";
import FxToast from "../packages/fxToast/fxToast";
import FxSkeleton from "../packages/fxSkeleton";
import FxInput from "../packages/fxInput";


export default {
  name: 'App',
  components: {
    FxInput,
    FxSkeleton,
    FxToast,
    FxTabPane,
    FxMagnifier,
    FxSelector,
    FxPopover,
    FxModal,
    FxMenuItem,
    FxMenu,
    FxButton,
  },
  setup() {

    const user = ref('123')
    const password = ref('')
    const test = () => {
      console.log(user.value);
    }
    return {
      user, password  ,
      test
    }
  }
}
</script>

<style>
.wrapper {
  width: 300px;
}
</style>
