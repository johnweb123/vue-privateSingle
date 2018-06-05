<template>
  <div>

    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

      <ul slot="list">
        <li v-for="(item, index) in clientList" :key="index">
          <p>
            <span>产品:</span>
            {{ item.product_name }}
          </p>
          <p>
            <span>申请人:</span>
            {{ item.username }}
          </p>
          <p>
            <span>联系方式:</span>
            {{ item.phone }}
          </p>
          <p>
            <span>申请时间</span>
            {{ item.time }}
          </p>
          <p>
            <span>结算时间:</span>
            {{ item.jiesuan_time }}
          </p>
          <p>
            <span>结算金额:</span>
            {{ item.jisuan_yongjin }}
          </p>
        </li>
      </ul>

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
      clientList: [],
      clientPage: 1,   //   客户列表 page
    }
  },
  mounted () {
    this._getOurClient()
  },
  methods: {
    //  获取客户列表数据
      _getOurClient () {
        this.$dialog.loading.open('数据加载中')
        let uid = localStorage.getItem('uid')
        this.$axios.post(this.$store.state.G_HOST+'/app/product/kehulist', this.$qs.stringify({uid, page: this.clientPage}))
          .then(res => {
            this.$dialog.loading.close()
            if (res.data.code === 1) this.clientList = res.data.data
          })
          .catch(() => {
            this.$dialog.loading.close()
          })
      },
    // 滚动加载
    loadList() {
      this.clientPage++
      let uid = localStorage.getItem('uid')
      this.$axios.post(this.$store.state.G_HOST+'/app/product/kehulist', this.$qs.stringify({uid, page: this.clientPage}))
        .then(result => {
          if (result.data.data.length !== 0 && Array.isArray(result.data.data)) {
            this.clientList = [...this.clientList, ...result.data.data]
          }
          if (result.data.data.length < this.clientPage) {
              /* 所有数据加载完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
              return;
          }
          /* 单次请求数据完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
          }
        ).catch(err => {

        })
    },
  }
}
</script>

<style lang="less" scoped>
  //  客户列表
  .client-list {
    li {
      padding: 6px 14px;
      border-bottom: 1px solid #ddd;
      p {
        line-height: .45rem;
        color: #989595
      }
    }
  }
</style>
