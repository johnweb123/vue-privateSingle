<template>
  <div class="not-found">
    <h3>404</h3>
    <p>该页面不存在</p>
    <p>
      返回
      <a href="javascript:;" onclick="window.history.back()">上一页</a> |
      <router-link to="/">首页</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'not-found'
  }
</script>

<style lang="less" scoped>
@import '../less/_var.less';
.not-found {
  text-align: center;
  color: @color;
  margin-top: 1rem;
  h3 {
    font-size: 1rem;
  }
  p {
    margin-top: 0.25rem;
    a {
      color: #aee7f0;
    }
  }
}
</style>
