<template>
  <div>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo" class="margin-button1" :scroll-top="true">
      <yd-flexbox v-for="(item, index) in data" :key="index" class="conent" slot="list" @click.native="detail(item.id, item.title, item.conter)">
          <div class="imgbox"><img src="../../../static/img/user.png"></div>
          <yd-flexbox-item class="subject">
            <p class="title">{{item.title}}</p>
            更新时间：{{timestampToTime(item.time)}} <br>
            {{item.quanianname}}
          </yd-flexbox-item>
          <div class="color">{{item.visit}}已读</div>
      </yd-flexbox>

    <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
    Url: {}
  },
  data () {
    return {
      data: {},
      page: 1
    }
  },
  mounted () {
    this._getData()
  },
  methods: {
    openAlert(message) {
        this.$dialog.alert({mes:message});
    },
    // 访问文章获取权限
    detail (mid, title, conent) {
      let uid = localStorage.getItem('uid')
      this.$axios.post(this.$store.state.G_HOST+'/app/Mag/uquanxian', this.$qs.stringify({mid, uid}))
        .then(result => {
          // 如果有权限就进入详情，如果没有权限就提示
          result.data.code == -1
            ? this.openAlert(result.data.message)
            : this.$router.push({path: '/articleDetails', query: {mid}})
          // else this.$router.push({path: '/')
        })
    },
    // 获取数据
    _getData () {
      this.$axios.post(this.$store.state.G_HOST+'/app/mag/index', this.$qs.stringify({page: this.page, cateid: this.id}))
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
      this.$axios.post(this.$store.state.G_HOST+'/app/mag/index', this.$qs.stringify({page:this.page, cateid: this.id}))
      .then(result => {
        if (result.data.data.length !== 0 && Array.isArray(result.data.data)) {
          this.data = [...this.data, ...result.data.data]
        }
        if (result.data.data.length < 10) {
            /* 所有数据加载完毕 */
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
            return;
        }

        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
      })
    }
  }
}
</script>

<style lang="less">
    .imgbox {
    width: 18%;
    height: 1rem;

    img {
      display: inline-block;
      width: 100%;
    }

  }

  .subject {
      padding: 0.3rem 0.1rem;
      line-height: .4rem;
      width: 21%;

      .title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  }

  .conent {
    padding: 0 .2rem;
    background-color: #fff;
    border-bottom: 1px solid #cac5c5
  }
</style>
