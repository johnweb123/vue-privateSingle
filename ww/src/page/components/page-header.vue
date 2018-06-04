<style lang="less" scoped>
//  去掉 顶部导航 border
  .navbar-bottom-line-color:after {
    border-color: #44c125 !important;
  }
</style>


<template>
  <div class="page-header">
    <yd-navbar :title="title" :bgcolor="bgcolor" color="#fff">

      <span slot="left" v-if="leftIcon === 'leftArrow'" @click="leftClick">
          <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
          <span v-if="leftText" style="color:#fff">{{ leftText }}</span>
      </span>
      <span slot="left" v-else-if="leftIcon">
          <yd-icon :name="leftIcon" size="25px" color="#fff"></yd-icon>
      </span>


      <span slot="right" v-if="rightIcon === 'rightArrow'" @click="rightClick">
          <yd-navbar-next-icon></yd-navbar-next-icon>
          <span v-if="rightText" style="color:#fff">{{ rightText }}</span>
      </span>
      <span slot="right" v-else-if="rightIcon">
          <yd-icon :name="rightIcon" size="25px" color="#fff"></yd-icon>
      </span>
    </yd-navbar>
  </div>
</template>

<script>
export default {
  name: 'page-header',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    leftClick () {
      this.$router.go(-1)
    },
    rightClick () {}
  },
  beforeRouteEnter (to, form, next) {
    next()
  }
}
</script>
