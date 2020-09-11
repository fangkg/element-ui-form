<template>
  <div>
    <!-- 显示label -->
    <label v-if="label">{{label}}</label>
    <!-- 显示内部表单项 -->
    <slot></slot>
    <!-- 错误提示信息 -->
    <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            error: ''
        }
    }
}

</script>
<style>
</style>