<template>
  <fx-skeleton type="1" rows="5" width="1000" active></fx-skeleton>

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


export default {
  name: 'App',
  components: {
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
  setup(){
    const test =(e,name)=>{
      console.log(e);
      console.log(name);
    }
    return{
      test
    }
  }
}
</script>

<style>
</style>
