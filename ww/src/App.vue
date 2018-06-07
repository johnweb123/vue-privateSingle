<template>
  <div id="app">
    <transition name="slide-left" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
// import leftNav from '@/components/common/left'
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
  // components: {
  //   leftNav
  // }
}
</script>

<style lang="less">
  @import './less/_var.less';
  @import './less/init.less';
  @import './less/common.less';  
  .child-view {
    position: absolute;
    /*left: 0;*/
    /*top: 0;*/
    width: 100%;
    height: 100%;
    /*transition: all .1s cubic-bezier(.55,0,.1,1);*/
    // transition: transform .3s ease-out;
    background-color: #f7f7f7;
    overflow-x: hidden;
    margin-top: 1rem;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    /*-webkit-transform: translate(30px, 0);*/
    /*transform: translate(30px, 0);*/
    transform: translateX(100%);
    /*transform: scale(1.1);*/
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 1;
    /*transform: scale(1);*/
    /*-webkit-transform: translate(-30px, 0);*/
    /*transform: translate(-30px, 0);*/
    transform: translateX(-100%);
    transition: all 0.5s;
  }
</style>
