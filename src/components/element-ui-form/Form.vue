<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    // 跨层级传参，传递表单实例本身
    provide() {
        return {
            form: this // 这里传递的是表单组件的实例本身
        }
    },
    // props: model, rules
    // validate()
    props: {
        model: {
            type: Object,
            required: true 
        },
        rules: Object
    },
    methods: {
        // 全局校验方法
        validate(cb) {
            // 执行内部所有FormItem校验方法 统一处理结果
            // 将FormItem数组转换为promise数组
            // const tasks = this.$children.map(item => item.validate())
            // Cannot read property 'transform' of undefined 登录按钮造成的 需要过滤掉
            const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
            Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
            // cb(true)
        }
    }
}

</script>
<style>
</style>