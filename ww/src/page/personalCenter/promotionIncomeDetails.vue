<template>
  <div>
    <pageHeader :title="'推广收入明细'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'"></pageHeader>

    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-flexbox v-for="(item, index) in data" :key="index" class="conent" slot="list">
          <div class="imgbox"><img src="../../../static/img/user.png"></div>
          <yd-flexbox-item class="subject">
            {{item.user_name}} 获得团队贷款管理津贴 <br>
            <br>
            结算时间：{{timestampToTime(item.create_time)}}
          </yd-flexbox-item>
          <div class="color">{{item.money}}元</div>
      </yd-flexbox>

    <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      data: {},
      page: 1
    }
  },
  components: {
    pageHeader
  },
  mounted () {
    this._getData()
  },
  methods: {
    // 获取数据
    _getData () {
      let uid = localStorage.getItem('uid')
      this.$axios.post('http://m.jubao520.com/app/income/extension', this.$qs.stringify({uid}))
      .then(result => {
        this.data = result.data.data
      })
      .catch(err => {

      })
    },
    // 时间戳转时间
    timestampToTime (timestamp) {
        var date = new Date(timestamp * 1000)//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
        let D = date.getDate() + ' '
        let h = date.getHours() + ':'
        let m = date.getMinutes() + ':'
        let s = date.getSeconds()
        return Y + M + D + h + m + s
    },
    // 滚动加载
    loadList() {
      this.page++
      let uid = localStorage.getItem('uid')
      this.$axios.post('http://m.jubao520.com/app/income/extension', this.$qs.stringify({page:this.page, uid}))
      .then(result => {
        this.data = [...this.data, ...result.data.data]
      })
    }  
  }
}
</script>

<style lang="less" scoped>
  @import '../../less/_var.less';
  .imgbox {
    width: 18%;
    height: 1.3rem;

    img {
      display: inline-block;
      width: 100%;
    }

  }

  .subject {
      padding: .1rem;
      line-height: .4rem
    }

  .conent {
    padding: 0 .2rem;
    background-color: #fff;
    border-bottom: 1px solid #cac5c5
  }
  .color {
    color: @color
  }
</style>
