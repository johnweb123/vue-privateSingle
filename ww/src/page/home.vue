<template>
  <div class="home">
    <!-- 首页轮播 -->
    <yd-slider autoplay="3000" style="height:130px">
        <yd-slider-item v-for="(item, key) in banner" :key="key">
            <router-link :to="item.url">
                <img :src="item.pic" style="height:130px">
            </router-link>
        </yd-slider-item>
    </yd-slider>
    <!-- 首页四格 -->
    <yd-grids-group :rows="4" item-height="">
        <yd-grids-item type="link" link="/upgradeUser">
            <img slot="icon" src="../../static/img/home/upgrade_membership.png">
            <span slot="text">升级会员</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/article', query: { type: 'dkzx'}})">
            <img slot="icon" src="../../static/img/home/loan_center.png">
            <span slot="text">贷款中心</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/article', query: { type: 'bkzx'}})">
            <img slot="icon" src="../../static/img/home/fast_handle_card.png">
            <span slot="text">快速办卡</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/article', query: { type: 'czzn'}})">
            <img slot="icon" src="../../static/img/home/newbie_guide.png">
            <span slot="text">新手指南</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/generalize'})">
            <img slot="icon" src="../../static/img/home/million_guest to_push.png">
            <span slot="text">亿客地推</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/article', query: { type: 'cpgl'}})">
            <img slot="icon" src="../../static/img/home/product_strategy.png">
            <span slot="text">产品攻略</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/article', query: { type: 'xytj'}})">
            <img slot="icon" src="../../static/img/home/small_recommend.png">
            <span slot="text">小亿推荐</span>
        </yd-grids-item>
        <yd-grids-item type="link" @click.native="$router.push({path: '/article', query: { type: 'lxkf'}})">
            <img slot="icon" src="../../static/img/home/contact _customer_service.png">
            <span slot="text">联系客服</span>
        </yd-grids-item>
    </yd-grids-group>
    <!-- 滚动公告 -->
    <yd-rollnotice autoplay="4000" class="notive margin-top2">
        <yd-rollnotice-item v-for="(item, key) in gundong" :key="key">
            <span style="color:#F00;"> {{ item }} </span>
        </yd-rollnotice-item>
    </yd-rollnotice>
    <!-- 选项卡 -->
    <yd-tab class="margin-top2">
        <yd-tab-panel :label="item.title" v-for="(item, key) in tab" :key="key">
          <Scroll :id="item.id"> </Scroll>
        </yd-tab-panel>
    </yd-tab>

    <!-- 底部 -->
    <!-- <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/home" active>
          <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分享" link="/share">
          <yd-icon name="share3" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="资讯" link="/message">
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/personalCenter">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar> -->

    <div class="mask-layer">
      <div class="pop">
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from './components/infiniteScroll'

export default {
  name: 'home',
  components: {
    Scroll
  },
  data () {
    return {
        tab: {},
        banner: [],
        gundong: []
    }
  },
  mounted () {
    this._getTab()
    this._getData()
  },
  methods: {
      _getTab () {
        this.$axios.post(this.$store.state.G_HOST+'/app/mag/cate')
            .then(result => { this.tab = result.data.data})
      },
      _getData () {
        this.$axios.post(this.$store.state.G_HOST+'/app/index/myhone')
            .then(result => {
                this.banner = result.data.data.banner
                this.gundong = result.data.data.gundong
            })
      }
  }
}
</script>

<style lang="less" scoped>
  .notive {
    padding-left: 0.4rem
  }
  .home {
    margin-top: -1rem;
  }
  .mask-layer {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.7);
      top:0;
      left: 0;
      z-index: 101;
      .pop {
        width: 90%;
        height: 10rem;
        margin: 2rem auto 2rem;
        background-color: #fff;

      }
  }
</style>
