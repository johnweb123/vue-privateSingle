<template>
  <div class="footer">
    <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/container/home" :active="type == 'home'" @click.native="clickTab('home')">
          <yd-icon name="home" slot="icon" size=".6rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分享" link="/container/share" :active="type == 'share'" @click.native="clickTab('share')">
          <yd-icon name="share3" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="资讯" link="/container/message" :active="type == 'message'" @click.native="clickTab('message')">
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/container/personalCenter" :active="type == 'personalCenter'" @click.native="clickTab('personalCenter')">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'home'
    }
  },
  methods: {
    clickTab (val) {
      this.type = val
    }
  },
  created () {
    let index = this.$router.history.current.fullPath.lastIndexOf('/') + 1
    this.type = this.$router.history.current.fullPath.substr(index)
  }
}
</script>


