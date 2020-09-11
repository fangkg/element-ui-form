<template>
  <div>
      <!-- 双向数据绑定 -->
    <FormItem label="用户名">
        <Input v-model="model.username" placeholder="请输入用户名！"/>
    </FormItem>
    <p>{{model}}</p>
  </div>
</template>

<script>
import Input from '@/components/element-ui-form/Input.vue'
import FormItem from '@/components/element-ui-form/FormItem.vue'

export default {
    components: {
        Input,
        FormItem
    },
    data() {
        return {
            model: {
                username: 'tom'
            }
        }
    }
}

</script>
<style>
</style>