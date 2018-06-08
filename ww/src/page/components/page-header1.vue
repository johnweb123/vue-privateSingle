<style lang="less" scoped>
//  去掉 顶部导航 border
  .navbar-bottom-line-color:after {
    border-color: #53beb7 !important;
  }
</style>


<template>
  <div class="page-header">
    <yd-navbar :title="title" :bgcolor="bgcolor" color="#fff">

      <router-link to="#" slot="left" v-if="leftIcon === 'leftArrow'">
          <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
      </router-link>
      <router-link to="#" slot="left" v-else-if="leftIcon">
          <yd-icon :name="leftIcon" size="25px" color="#fff"></yd-icon>
      </router-link>


      <router-link to="#" slot="right" v-if="rightIcon === 'rightArrow'">
          <yd-navbar-next-icon></yd-navbar-next-icon>
      </router-link>
      <router-link to="#" slot="right" v-else-if="rightIcon">
          <yd-icon :name="rightIcon" size="25px" color="#fff"></yd-icon>
      </router-link>
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
    rightIcon: {
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
  }
}
</script>
