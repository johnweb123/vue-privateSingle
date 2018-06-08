<template>
  <div class="container">
    <transition name="slide-left" mode='out-in'>
      <router-view></router-view>
    </transition>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageFooter from '@/page/components/page-footer'

export default {
  components: { pageFooter },
  beforeRouterEnter (to, form, next) {
  }
}
</script>

<style lang="less" scoped>
.slide-left-enter, .slide-left-leave-active {
    transition: all .3s;
    opacity: 0;
    // transform: translateX(-100%)
  }
  .slide-left-enter-active, .slide-left-leave {
    opacity: 1;
    // transform: translateX(100%)    
  }
</style>