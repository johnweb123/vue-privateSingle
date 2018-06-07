<style lang="less" scoped>
.btn {
  width: 96%;
  margin: 6.5rem auto 0;
}
</style>


<template>
  <div>

    <page-header :title="'设置'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header> 

    <yd-button class="btn" size="large" @click.native="branckdown" type="hollow">退出登录</yd-button>
  </div>
</template>

<script>
import pageHeader from './components/page-header'
export default {
  components: {
    pageHeader
  },
  methods: {
    branckdown () {
      this.$dialog.confirm({
          title: '请确认',
          mes: '确定退出吗？',
          opts: () => {
            localStorage.clear()
            this.$dialog.toast({mes: '退出成功', timeout: 1000});
            setTimeout( () => { this.$router.push({path: '/login'}) },1000)
          }
      });
    }
  }
}
</script>
