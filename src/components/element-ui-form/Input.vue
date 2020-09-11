<template>
  <div>
    <!-- 管理数据 实现数据双向绑定 -->
    <!-- :value, @input -->
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        // 派发值
        onInput(e) {
            this.$emit('input', e.target.value)
        }
    }
}

</script>
<style>
</style>