<template>
  <div>
    <!-- 头部信息 -->
    <yd-navbar title="已提金额" class="margin-button2">
        <span @click="$router.go(-1)" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </span>
    </yd-navbar>
    <!-- 提现记录 -->
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-cell-group v-for="(item, index) in list" :key="index" slot="list">
          <yd-cell-item>
              <span slot="left">提现金额:{{ item.money }}</span>
              <span slot="right" v-if="item.status == 2" class="uncheck">{{ item.statusname }}</span>
              <span slot="right" v-else-if="item.status == 1" class="review">{{ item.statusname }}</span>
              <span slot="right" v-else-if="item.status == 3" class="success">{{ item.statusname }}</span>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">提现时间: {{timestampToTime(item.create_time)}}</span>
          </yd-cell-item>
      </yd-cell-group>

      <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
    </yd-infinitescroll>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: {},
      page: 1
    }
  },
  mounted () {
    this._getData()
  },
  methods: {
    _getData () {
      let uid = localStorage.getItem('uid')
      this.$axios.post('http://m.jubao520.com/app/income/moneyrecord', this.$qs.stringify({uid}))
        .then(result => {
          this.list = result.data.data
        })
    },
    // 滚动加载
    loadList () {
      this.page++
      let uid = localStorage.getItem('uid')
      this.$axios.post('http://m.jubao520.com/app/income/moneyrecord', this.$qs.stringify({uid, page: this.page}))
        .then(result => {
          this.list = [...this.list, result.data.data]
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
    }
  }
}
</script>

<style>
  .uncheck {
    color: #5b5bcc
  }
  .review {
    color:#adad0c
  }
  .success {
    color: #19ad0c
  }
</style>
