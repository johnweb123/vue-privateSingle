<template>
  <div class="home">
    <div class="112233"></div>
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
            <span slot="text">小亿推客</span>
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
            <img style="width:.3rem;height:.3rem;margin-right:.1rem" src="../../static/img/horn.jpg" alt="">
            <span style="color:#F00;"> {{ item }} </span>
        </yd-rollnotice-item>
    </yd-rollnotice>
    <!-- 选项卡 -->
    <yd-tab class="margin-top2">
        <yd-tab-panel :label="item.title" v-for="(item, key) in tab" :key="key">
          <Scroll :id="item.id"> </Scroll>
        </yd-tab-panel>
    </yd-tab>

    <div class="mask-layer" v-if="pop">
      <div class="pop">
          <div class="pop-top">
              <span>公告</span>
              <span class="close"><img src="../../static/img/close.png" alt="" @click="pop = false"></span>
          </div>
          
          <div class="pop-main" v-html="notice.body"></div>
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
        gundong: [],
        pop: '',
        notice: {}
    }
  },
  mounted () {
    this._getTab()
    this._getData()
    this._getNotice()
  },
  methods: {
      show () {},
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
      },
      // 获取公告
      _getNotice () {
          // 
          this.pop = sessionStorage.getItem('pop') === "false" ? false : true
          sessionStorage.setItem('pop', false)
          this.$axios.post(`${this.$store.state.G_HOST}/app/index/gonggao`)
            .then(result => {
                this.notice = result.data.data
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
        
        .pop-top {
            text-align: center;
            line-height: 44px;
            font-size: .4rem;
            width: 100%;
            position: relative;
        }
        .close {
            position: absolute;
            right: .22rem;
            img {
                width: 13px;
                height: 13px;
                vertical-align: middle
            }      
        }
        .pop-main {
           margin-top: .2rem;
           text-indent:2em;
           overflow: scroll;
           padding: 0 .3rem;
           line-height: 0.4rem;
           width: 100%;
           height: 84%;
        }
      }
  }

  .pop-main::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 0;
    }
    .pop-main::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(0,0,0,0.2);
    }
    .pop-main::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(0,0,0,0.1);
    }
</style>
