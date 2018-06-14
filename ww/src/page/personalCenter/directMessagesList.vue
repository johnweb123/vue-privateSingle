<style lang="less">
    .conent {
      padding: 0 .3rem;
      height: 1.5rem;
      border-bottom: 1px solid #d4cfcf
    }
    .conter {
      text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-top: .2rem;font-size: .3rem;
    }
</style>

<template>
  <div>

    <page-header :title="'私信'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header>

    <yd-tab>
        <yd-tab-panel label="私信列表">
            <div v-for="(item, index) in newslist" :key="index" class="conent">
              <router-link :to="{path:'/directMessages', query:{id: item.id, uid: item.user_id}}">
                <div class="subject">
                  <div class="conter">{{item.conter}}</div>
                  <br>
                  <div style="text-align:right"> {{item.time}}</div>
                </div>
              </router-link>
            </div>
        </yd-tab-panel>
        <yd-tab-panel label="公告列表">
            <div v-for="(item, index) in gonggaolist" :key="index" class="conent">
              <router-link :to="{path:'/details', query:{id: item.id}}">
                <div class="subject">
                  <div class="conter">{{item.title}}</div>
                  <br>
                  <yd-flexbox>
                      <yd-flexbox-item>已浏览:{{item.liulan}}</yd-flexbox-item>
                      <yd-flexbox-item style="text-align:right">{{item.create_time}}</yd-flexbox-item>
                  </yd-flexbox>
                </div>
              </router-link>
            </div>
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  props: {
    id: {},
    Url: {}
  },
  data () {
    return {
      newslist: [],
      gonggaolist: []
    }
  },
  components: {
    pageHeader
  },
  mounted () {
    this._getData()
  },
  methods: {
    openAlert(message) {
        this.$dialog.alert({mes:message});
    },
    // 访问文章获取权限
    getArticleDetailJurisdiction (id, uid) {
        this.$router.push({path: '/directMessages', query: {id}})
    },
    // 获取数据
    _getData () {
      let uid = localStorage.getItem('uid')
      this.$axios.post(this.$store.state.G_HOST+'/app/income/newslist', this.$qs.stringify({uid}))
      .then(result => {
        this.newslist = result.data.data
      })
      this.$axios.post(this.$store.state.G_HOST+'/app/income/gonggaolist', this.$qs.stringify({uid}))
      .then(result => {
        this.gonggaolist = result.data.data
      })
    }
  }
}
</script>

