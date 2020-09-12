<template>
  <div>
      <!-- 双向数据绑定 -->
    <Form :model="model" :rules="rules" ref="formRef">
        <FormItem label="用户名" prop="username">
            <Input v-model="model.username" placeholder="请输入用户名！"/>
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input v-model="model.password" placeholder="请输入密码！"/>
        </FormItem>
        <FormItem>
            <button @click="login">登录</button>
        </FormItem>
    </Form>
    <!-- <p>{{model}}</p> -->
  </div>
</template>

<script>
import Input from '@/components/element-ui-form/Input.vue'
import FormItem from '@/components/element-ui-form/FormItem.vue'
import Form from '@/components/element-ui-form/Form.vue'
import create from '@/utils/create'
import Notice from '@/components/dialog/Notice.vue'

export default {
    components: {
        Input,
        FormItem,
        Form
    },
    data() {
        return {
            model: {
                username: 'tom',
                password: '123'
            },
            rules: {
                username: [{required: true, message: '请输入用户名！'}],
                password: [{required: true, message: '请输入密码！'}]
            }
        }
    },
    methods: {
        login() {
            this.$refs.formRef.validate(isValid => {
                // 创建Notice实例
                create(Notice, {
                    title: '弹框测试实例',
                    message: isValid ? '请求登录': '校验失败',
                    duration: 3000
                }).show()
                // 合法
                if (isValid) {
                    console.log('request login')
                } else {
                    alert('校验失败！')
                }
            })
        }
    }
}

</script>
<style>
</style>