<template>
  <div>
    <div class="list-firend">
      <!-- 头部 -->
      <yd-navbar title="我的会员">
          <span @click="$router.go(-1)" slot="left">
              <yd-navbar-back-icon></yd-navbar-back-icon>
          </span>
      </yd-navbar>

      <!-- 会员列表 -->
      <yd-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick">
          <yd-tab-panel v-for="(item, key) in list" :label="item.status" :key="key">
            <yd-list theme="4">
              <yd-list-item v-for="(item, key) in data" :key="key">
                  <img slot="img" class="img-circle" src='../../../static/img/user.png'>
                  <span slot="title">姓名：{{item.true_name}} {{item.phone}}</span>
                  <yd-list-other slot="other">
                      <div class="list">
                          <span>UID：{{item.id}}</span>
                          <div>关注时间：{{timestampToTime(item.create_time)}}</div>
                          <div>微信号：{{item.weixinnum}}</div>
                      </div>
                  </yd-list-other>
              </yd-list-item>
          </yd-list>
          </yd-tab-panel>
      </yd-tab>
    </div>
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
      key: 1,
      tab2: 0,
      list: [
        {status:'一级会员'},
        {status:'二级会员'},
        {status:'三级会员'}
      ]
    }
  },
  mounted () {
    this._getData()
  },
  methods: {
    // 获取数据
    _getData () {
      let uid = localStorage.getItem('uid')
      this.$axios.post(this.$store.state.G_HOST+'/app/income/myvip', this.$qs.stringify({status: this.key, uid}))
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
    fn(label, key) {
    },
    itemClick(key) {
        this.$dialog.loading.open('数据加载中');
        this.key = key+1;
        setTimeout(() => {
            this.tab2 = key;
            this.$dialog.loading.close();
            this._getData()
        }, 1000);
    }
  }
}
</script>

<style>
  .img-circle {
    border-radius: 50%
  }
  .yd-list-theme4 .yd-list-item .yd-list-img {
    width: 1.5rem;
  }
  .list{
    line-height: .4rem;
    font-size: .23rem
  }
  .yd-list-theme4 .yd-list-item .yd-list-title {
    padding-top: .2rem;
  }
  .list-firend {
    margin-top: -1rem;
  }
</style>
