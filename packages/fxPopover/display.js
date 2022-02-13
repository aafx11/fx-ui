export default {
    mounted(el, {value}) {
        const content = el.querySelector('.content-wrapper')
        if (value === 'hover') {
            el.addEventListener('mouseenter', () => {
                content.style.display = 'block'
            }, false)

            el.addEventListener('mouseleave', () => {
                content.style.display = 'none'
            }, false)
        } else if (value === 'focus') {

            el.firstElementChild.addEventListener('focus', () => {
                content.style.display = 'block'
            }, false)

            el.firstElementChild.addEventListener('blur', () => {
                content.style.display = 'none'
            }, false)

        } else if (value === 'click') {
            let show = false

            el.firstElementChild.addEventListener('click',()=>{
                if (!show && content.style.display != 'block' ){
                    content.style.display = 'block'
                    document.addEventListener('click',close)
                    show = true
                } else {
                    show = !show
                }

            })

            const close = function (e){
                // 1: 点击popover包裹的元素, 关闭popover
                // 2: 点击popover内容区元素, 不关闭popover
                let flag;
                if (el.contains(e.target) && !content.contains(e.target)){
                    flag = true
                } else if (el.contains(e.target) && content.contains(e.target)){
                    flag = false
                } else if(!el.contains(e.target) && !content.contains(e.target)){
                    show = false
                    flag = true
                }
                    if (!show && flag){
                    show = false
                    content.style.display = 'none'
                    document.removeEventListener('click',close)
                }
            }


        }
    }
}