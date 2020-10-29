# element-ui-form

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 通用表单组件 收集数据、检验数据并提交
1、Form 指定数据、校验规则
2、FormItem 
    label: 标签添加
    执行校验
    显示错误信息
3、Input 维护数据

# 弹窗类组件 在当前vue实例之外独立存在，通常挂载在body,通过js动态创建，不需要任何组件中声明。

// 使用
this.$create(Notice, {
    title: "搬砖",
    message: "提示信息",
    duration: 1000
})

// 函数定义
import Vue from "vue";

// 创建函数接收要创建组件定义
function create(Component, props) {
    // 创建一个VUe新实例
    const vm = new Vue({
        render(h) {
            // render函数将传入组件配置对象转换为虚拟dom
            return h(Component, { props });
        }
    }).$mount(); // 执行挂载函数，但未指定挂载目标，表示只是执行初始化工作

    // 将生成的dom元素追加至body
    document.body.appendChild(vm.$el);

    // 给组件实例添加销毁方法
    const comp = vm.$children[0];
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }

    return comp;
}

// 暴露调用接口
export default create;

// Notice组件
<template>
    <div class="box" v-if="isShow">
        <h3>{{title}}</h3>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    props:  {
        title: {
            type: String,
            default: " "
        },
        message: {
            type: String,
            default: " "
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        show() {
            this.isShow = true;
            setTimeout(this.hide, this.duration);
        },
        hide() {
            this.isShow = false;
            this.remove();
        }
    }
}
</script>
