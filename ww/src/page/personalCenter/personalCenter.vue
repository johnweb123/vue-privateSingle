<style lang="less" scoped>
  @import '../../less/_var.less';
  .main {
    .user-info {
      background-color: @color;
      color: #fff;
      text-align:center;
      padding: .1rem 0;
      .user-info-list {
        display: flex;
        padding: 0 .5rem .3rem;
        align-items: center;
        .user-img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          margin-right: .2rem;
        }
        .user-account {
          flex: 1;
          p {
            text-align: left;
          }
          p:last-child{
            margin-top: 5px;
          }
        }
        .arrows {
          width: 10px;
          height: 16px;
          transform: rotate(180deg);
          float: right;

        }
      }

      .user-money {
        display: flex;
        div:last-child {
          &:after {
            height: 0;
          }
        }
        div {
          flex: 1;
          position: relative;
          &:after {
            content:'';
            position: absolute;
            right: 0;
            top: .2rem;
            width: 1px;
            height: .6rem;
            background-color: #fff;
          }
          span  {
            font-size: 0.5rem;
            margin-top: 4px;
          }
          p {
            font-size: .3rem;
            margin-top: 6px;
          }
        }
      }

      >p {
        font-size: 0.28rem;
        margin-top: 6px;
      }
      >p.recommend {
        font-size: 0.24rem;
        img {
          width: .4rem;
          height: .4rem;
          vertical-align: middle;
          margin-left: 6px;
        }
      }
    }

    .wallet {
      height: 44px;
      background-color: #fff;
      line-height: 44px;
      padding: 0 .3rem;
      overflow: hidden;
      margin-bottom: 10px;
      div {
        float: left;
        font-size: .3rem;
      }
      div.right {
        float: right;
        color: #999;
      }

      img.icon-wallet {
        width: 28px;
        height: 28px;
        vertical-align: middle;
        margin-right: 8px;
      }
      img.wallet-arrows {
        width: 8px;
        height: 13px;
        vertical-align: middle;
        margin-left: 8px;
      }
    }
  }
</style>


<template>
  <div class="hd">
    <!-- 头部 start -->
    <page-header :title="'个人中心'" :rightIcon="'setting'" :bgcolor="'#53beb7'" @page-right-click="setting()"></page-header>
    <!-- 头部 end -->

    <div class="main">
      <div class="user-info">
        <div class="user-info-list">
          <img class="user-img" :src="userInfo.user.headimg">
          <div class="user-account">
            <p>账号: {{ userInfo.user.appphone }}</p>
            <p>会员ID： {{ userInfo.user.id }}</p>
          </div>
          <img class="arrows" src="../../../static/img/return_back.png" alt="" @click="$router.push({path: '/myData'})">
        </div>

        <div class="user-money">
          <div>
            <span>{{ userInfo.money.yuee }}</span>
            <p>金币余额</p>
          </div>

          <div>
            <span>{{ userInfo.money.daishenhe }}</span>
            <p>待审核佣金</p>
          </div>

          <div>
            <span>{{ userInfo.money.yitixian }}</span>
            <p>已提金额</p>
          </div>
        </div>

        <p>[会员等级]: {{ userInfo.user.levelname }}</p>
        <p class="recommend">推荐人：{{ userInfo.parent.nickname }}<a :href="`tel:${userInfo.parent.appphone}`"><img src="../../../static/img/phone.png" alt=""></a></p>
      </div>

      <div class="wallet" @click="$router.push({path:'/myWallet'})">
        <div>
          <img src="../../../static/img/personalCenter/myWallet.png" class="icon-wallet">
          我的钱包
        </div>
        <div class="right">
          {{ userInfo.user.money }}
          <img src="../../../static/img/mgmt-arrow-big.png" class="wallet-arrows">
        </div>
      </div>

      <yd-grids-group :rows="4" item-height="80px">
        <yd-grids-item :link="item.link" v-for="(item, index) in allList" :key="index" style="text-align:center">
          <div slot="else" style="text-center">
            <img :src="imgfrist+item.img" style="height:30px">
            <p>{{ item.text }}</p>
          </div>
        </yd-grids-item>
      </yd-grids-group>
    </div>



    <!-- 底部 start -->
    <!-- <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/home">
          <yd-icon name="home" slot="icon" size=".6rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="分享" link="/share">
          <yd-icon name="share3" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="资讯" link="/message">
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/personalCenter" active>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar> -->
    <!-- 底部 end -->
  </div>
</template>

<script>
import pageHeader from '../components/page-header.vue'
export default {
  data () {
    return {
      userInfo: {
          daishenhe: '',
        money: {
          yitixian: '',
          yuee: ''
        },
        parent: {
          appphone: '',
          nickname: ''
        },
        user: {
          appphone: '',
          headimg: '',
          levelname: '',
          money: '',
          parent1: ''
        }
      },
      imgfrist: '../../../static/img/personalCenter/',
      allList: [
        {img: "upgrade.png", text: '代理升级', link: '/upgradeUser'},
        {img: "friends.png", text: '我的好友', link: '/listFriends'},
        {img: "mydata.png", text: '我的资料', link: '/myData'},
        {img: "showRecords.png", text: '提现记录', link: '/showRecords'},
        {img: "incomeDetails.png", text: '收入明细', link: '/incomeDetails'},
        {img: "generalize.png", text: '亿客地推', link: '/generalize'},
        {img: "service.png", text: '联系客服', link: '/article/?type=lxkf'}
      ]
    }
  },
  components: {
    pageHeader
  },
  mounted () {
    this._getData()
  },
  methods: {
    setting () {
      this.$router.push('/logout')
    },
    _getData () {
      var vm = this
      let uid = localStorage.getItem('uid')
      this.$axios.post(`${this.$store.state.G_HOST}/app/income/myadmin`, this.$qs.stringify({uid: 918}))
        .then((res) => {
          if (res.status === 200 && res.data.code === 1) {
            vm.$nextTick(() => {
              vm.userInfo = res.data.data
            })
          }
        }, res => {
        })
    }
  }
}
</script>
