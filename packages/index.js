import fxButton from "./fxButton.vue";
import './icon'
const list = [
    fxButton
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