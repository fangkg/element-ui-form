<template>
  <div>
    <!-- 显示label -->
    <label v-if="label">{{label}}</label>
    <!-- 显示内部表单项 -->
    <slot></slot>
    <!-- 错误提示信息 -->
    <p v-if="error" class='error'>{{error}}</p>
    <p>{{form.model}}</p>
    <p>{{form.model[prop]}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            error: 'some error!'
        }
    },
    methods: {
        // 当前表单项校验
        validate() {
            console.log('input validate')
            // element-ui使用的是async-validator
            // 引入 npm i aysnc-validator
            // 获取校验规则和当前数组
            const rules = this.form.rules[this.prop]
            const value = this.form.model[this.prop]
            const schema = new Schema({[this.prop]: rules})
            // 用上面校验规则校验下面的值
            // 返回promise，全局统一处理
            return schema.validate({[this.prop]: value}, errors => {
                // errors存在校验失败
                if (errors) {
                    this.error = errors[0].message
                } else {
                    // 校验通过
                    this.error = ''
                }
            })
        }
    },
    mounted () {
        this.$on('validate', () => {
            this.validate()
        })
    }
}

</script>
<style scoped>
.error {
    color: red;
}
</style>