<template>
  <div>
    <!-- 选项卡 -->
    <yd-tab>
        <yd-tab-panel :label="item.title" v-for="(item, key) in tab" :key="key">
          <Scroll :id="item.id"> </Scroll>
        </yd-tab-panel>
    </yd-tab>

    <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/home">
        <yd-icon name="home" slot="icon" size=".6rem"></yd-icon>
            <!-- <yd-icon name="home" slot="icon" size="0.54rem" active="true"></yd-icon> -->
        </yd-tabbar-item>
        <yd-tabbar-item title="分享" link="/share">
          <yd-icon name="share3" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="消息" link="/message" active>
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/personalCenter">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
import Scroll from '../components/infiniteScroll'
export default {
  name: 'messge',
  data () {
    return {
      tab: {}
    }
  },
  components: {
    Scroll
  },
  mounted () {
    this._getTab()
  },
  methods: {
    _getTab () {
        this.$axios.post(this.$store.state.G_HOST+'/app/mag/cate')
            .then(result => { this.tab = result.data.data})
      }
  }
}
</script>

