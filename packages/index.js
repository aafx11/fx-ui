import fxButton from "./fxButton.vue";
import fxModal from "./fxModal.vue";
import fxPopover from "./fxPopover/fxPopover.vue";
import fxSelector from "./Selector/fxSelector.vue";
import fxTabs from "./fxTabs/fxTabs.vue";
import fxTabPane from "./fxTabs/fxTabPane.vue";
import fxSkeleton from "./fxSkeleton.vue";
import fxInput from "./fxInput.vue";
import fxSwitch from "./fxSwitch.vue";
import fxRadio from "./fxRadio.vue";
import fxRadioGroup from "./fxRadioGroup.vue";
import fxCheckbox from "./fxCheckbox.vue";
import fxCheckboxGroup from "./fxCheckboxGroup.vue";
//图标库
import './icon/iconfont.css'
import './icon/iconfont.js'
const list = [
    fxButton,
    fxModal,
    fxPopover,
    fxSelector,
    fxTabs,fxTabPane,
    fxSkeleton,
    fxInput, fxSwitch,fxRadio,fxRadioGroup,fxCheckbox,fxCheckboxGroup

]

const install = function (Vue) {
    list.forEach((item)=>{
        Vue.component(item.name,item)
    })
}

if (typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install
}