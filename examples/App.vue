<template>
  <div class="wrapper">
    <fx-input placeholder="请输入" type="password" disabled></fx-input>
    <fx-input v-model="user" clearable></fx-input>
    <fx-input v-model="password" show-password type="password"></fx-input>

    <button @click="test">123</button>
  </div>
  <div class="wrapper">
    <fx-switch v-model="active"></fx-switch>
    <fx-switch v-model="active" active-color="blue" inactive-color="red" name="sex"></fx-switch>

  </div>
  <div class="wrapper">
    <fx-radio label="1" v-model="gender">男</fx-radio>
    <fx-radio label="2" v-model="gender">女</fx-radio>
    <button @click="show">11</button>
  </div>
  <div class="wrapper">
    <fx-radio-group v-model="gender">
      <fx-radio label="1" >男</fx-radio>
      <fx-radio label="2" >女</fx-radio>
    </fx-radio-group>
        <fx-radio label="1" v-model="gender">男</fx-radio>
        <fx-radio label="2" v-model="gender">女</fx-radio>
  </div>

  <div class="wrapper">
    <fx-checkbox v-model="check" label="1">是否选中{{check}}</fx-checkbox>

    <fx-checkbox-group v-model="list">
      <fx-checkbox label="麦当劳"></fx-checkbox>
      <fx-checkbox label="肯德基"></fx-checkbox>
      <fx-checkbox label="汉堡王"></fx-checkbox>
    </fx-checkbox-group>
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
import FxSwitch from "../packages/fxSwitch";
import FxRadio from "../packages/fxRadio";
import FxRadioGroup from "../packages/fxRadioGroup";
import FxCheckboxGroup from "../packages/fxCheckboxGroup";
import FxCheckbox from "../packages/fxCheckbox";


export default {
  name: 'App',
  components: {
    FxCheckbox,
    FxCheckboxGroup,
    FxRadioGroup,
    FxRadio,
    FxSwitch,
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


    const active = ref(false)
    const test = () => {
      console.log(active.value);
    }

    const gender = ref('1')
    const show = () => {
      console.log(gender.value);
    }

    const check = ref(false)

    // const list = ref(['麦当劳','肯德基','汉堡王'])
    const list = ref(['麦当劳','肯德基'])

    return {
      user, password, active, gender,check,list,
      test,show
    }
  }
}
</script>

<style>
.wrapper {
  width: 300px;
}
</style>
