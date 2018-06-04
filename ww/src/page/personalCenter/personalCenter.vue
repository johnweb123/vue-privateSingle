<style lang="less" scoped>
  @import '../../less/_var.less';
  .personalCenter {

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
          width: 24px;
          height: 24px;
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

}
</style>


<template>
  <div class="personalCenter">
    <!-- 头部 start -->
    <page-header :title="'个人中心'" :rightIcon="'setting'" :bgcolor="'#44c125'"></page-header>
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
        <p class="recommend">推荐人：{{ userInfo.parent.nickname }}<a><img src="../../../static/img/logo.png" alt=""></a></p>
      </div>

      <div class="wallet" @click="$router.push({path:'/myWallet'})">
        <div>
          <img src="../../../static/img/logo.png" class="icon-wallet">
          我的钱包
        </div>
        <div class="right">
          {{ userInfo.user.money }}
          <img src="../../../static/img/mgmt-arrow-big.png" class="wallet-arrows">
        </div>
      </div>

      <yd-grids-group :rows="4" item-height="80px">
        <yd-grids-item link="/">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>钱包</p>
            </div>
        </yd-grids-item>
        <yd-grids-item link="/listFriends">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>我的好友</p>
            </div>
        </yd-grids-item>
        <yd-grids-item link="/myData">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>我的资料</p>
            </div>
        </yd-grids-item>
        <yd-grids-item link="/showRecords">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>提现记录</p>
            </div>
        </yd-grids-item>
        <yd-grids-item link="/incomeDetails">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>收入明细</p>
            </div>
        </yd-grids-item>
        <yd-grids-item link="/generalize">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>蚂蚁地推</p>
            </div>
        </yd-grids-item>

        <yd-grids-item link="/article/?type=lxkf">
            <div slot="else" style="text-align: center;">
                <img src="../../../static/img/logo.png" style="height: 30px;">
                <p>联系客服</p>
            </div>
        </yd-grids-item>
    </yd-grids-group>
    </div>



    <!-- 底部 start -->
    <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/">
          <yd-icon name="home" slot="icon" size=".6rem"></yd-icon>
            <!-- <yd-icon name="home" slot="icon" size="0.54rem" active="true"></yd-icon> -->
        </yd-tabbar-item>
        <yd-tabbar-item title="分享" link="/share">
          <yd-icon name="share3" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="消息" link="/message">
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/personalCenter" active>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    <!-- 底部 end -->
  </div>
</template>

<script>
import pageHeader from '../components/page-header.vue'
export default {
  name: 'personalCenter',
  data () {
    return {
      userInfo: {}
    }
  },
  components: {
    pageHeader
  },
  created () {
    // this._getData()
  },
  mounted () {
    console.log()
    this._getData()
  },
  methods: {
    _getData () {
      var vm = this
      let uid = localStorage.getItem('uid')
      this.$axios.post(`${this.$store.state.G_HOST}/app/income/myadmin`, this.$qs.stringify({uid: 918}))
        .then((res) => {
          if (res.status === 200 && res.data.code === 1) {
            vm.userInfo = res.data.data
            console.log(vm.userInfo.user.headimg)
          }
        }, res => {
          console.log(res)
        })
    }
  }
}
</script>
