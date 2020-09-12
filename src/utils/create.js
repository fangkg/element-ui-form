// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上

import Vue from 'vue'
// create函数的本质要返回组件实例
export default function create(Component, props){
    // 实例创建 使用extend方式创建组件并挂载
    // Vue.extend()

    // 方式二 借鸡生蛋
    const vm = new Vue({
        render(h) {
            return h(Component, { props })
        }
    }).$mount()

    // $mount() 将vdom => dom

    // 通过vm.$el 获取生成的dom
    document.body.appendChild(vm.$el)

    // 删除函数
    // 获取组件实例
    const comp = vm.$children[0]
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}