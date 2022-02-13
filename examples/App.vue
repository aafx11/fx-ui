<template>
  <fx-tabs defaultKey="1" >
    <fx-tab-pane label="选项1" name="1" >
      <div>内容1</div>
    </fx-tab-pane>
    <fx-tab-pane label="选项2" name="2" disabled>
      <div>内容2</div>
    </fx-tab-pane>
    <fx-tab-pane label="选项3" name="3">
      <div>内容3</div>
    </fx-tab-pane>
  </fx-tabs>
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


export default {
  name: 'App',
  components: {
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
    return{

    }
  }
}
</script>

<style>
.test-button {

}
.container{
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  /*width: 300px;*/
}
.title{
  background-color: red;
}
</style>
