
<style lang="less" scoped>
.share {
  .list {
    width: 90%;
    margin: 0 auto;
    margin-top: .5rem;
    height:1.2rem;
    line-height: 1.2rem;
    padding: 0 .4rem;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-radius: 6px;
    font-size: .3rem;
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: #ddd;
      border-radius: 50%;
      margin-right: 8px;
      vertical-align: middle;
      position: relative;
    }
    img.ico {
      position:absolute;
      top: 50%;
      left: 50%;
      margin-left: -12px;
      margin-top: -12px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
    }
    div.right {
      float: right;
      img.arrows {
        width: 10px;
        height: 15px;
        vertical-align: middle;
        margin-left: 8px;
      }
    }
  }
}
</style>

<template>
  <div class="share">
    <!-- 头部 start -->
    <page-header :title="'分享'" :bgcolor="'#44c125'"></page-header>
    <!-- 头部 end -->

    <div class="main">
      <!-- <div></div> -->
      <div class="list" @click="$router.push({path: '/'})">
        <span><img class="ico" src="../../../static/img/user-img.jpg"></span>
        分享二维码图片
        <div class="right">
          <img class="arrows" src="../../../static/img/mgmt-arrow-big.png" alt="">
        </div>
      </div>

      <div class="list" @click="$router.push({path: '/'})">
        <span><img class="ico" src="../../../static/img/user-img.jpg"></span>
        亿融朋友圈
        <div class="right">
          <img class="arrows" src="../../../static/img/mgmt-arrow-big.png" alt="">
        </div>
      </div>

      <div class="list" @click="$router.push({path: '/'})">
        <span><img class="ico" src="../../../static/img/user-img.jpg"></span>
        分享朋友圈
        <div class="right">
          <img class="arrows" src="../../../static/img/mgmt-arrow-big.png" alt="">
        </div>
      </div>

      <div class="list" @click="$router.push({path: '/'})">
        <span><img class="ico" src="../../../static/img/user-img.jpg"></span>
        面对面开通账号
        <div class="right">
          <img class="arrows" src="../../../static/img/mgmt-arrow-big.png" alt="">
        </div>
      </div>
    </div>


    <yd-tabbar :fixed="true">
        <yd-tabbar-item title="首页" link="/">
        <yd-icon name="home" slot="icon" size=".6rem"></yd-icon>
            <!-- <yd-icon name="home" slot="icon" size="0.54rem" active="true"></yd-icon> -->
        </yd-tabbar-item>
        <yd-tabbar-item title="分享" link="/share" active>
          <yd-icon name="share3" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="消息" link="/message">
            <yd-icon name="order" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/personalCenter">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  name: 'share',
  data () {
    return {
    }
  },
  components: {
    pageHeader
  }
}
</script>
