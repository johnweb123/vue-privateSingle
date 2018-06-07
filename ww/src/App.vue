<template>
  <div id="app">
    <transition name="slide-left" mode='out-in'>
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
  },
  watch: {
      '$route' (to, from) {
        if (from.query.key) {
          if (to.query.key > from.query.key) {
            this.transitionName = 'slide-left'
          } else {
            this.transitionName = 'slide-right'
          }
        } else {
          this.transitionName = 'slide-left'
        }
        // cnzz
        if (window._czc) {
          let location = window.location
          let contentUrl = location.pathname + location.hash
          let refererUrl = '/'
          // console.log('location.hash:' + location.hash)
          // window._czc.push(['_setCustomVar', '管理中心总经理', 'LB20003']) // name
          window._czc.push(['_trackPageview', contentUrl, refererUrl])
        }
        // https://edu.aliyun.com/a/65756
      }
    }
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
    // overflow-x: hidden;
    margin-top: 1rem;
  }
  .slide-left-enter, .slide-left-leave-active {
    transition: all .5s;
    // transform: translateX(-100%)
    opacity: 0;
  }
  .slide-left-enter-active, .slide-left-leave {
    opacity: 1;
    // transform: translateX(100%)
  }



  .slide-right-enter, .slide-right-leave-active {
    transition: all .3 s;
    opacity: 0;
    transform: translateX(-100%)
  }
  .slide-right-enter-active, .slide-right-leave {
    opacity: 1;
    transform: translateX(100%)    
  }
</style>
