<template>
  <div>

    <page-header :title="'公告详情'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header> 
    
    <div v-html="data.body" class="box"></div>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      data: {}
    }
  },
  components: {
    pageHeader
  },
  mounted () {
    this._getData()
  },
  methods: {
    _getData () {
      let id = this.$route.query.id
      let uid = this.$route.query.uid
      this.$axios.post(this.$store.state.G_HOST+'/app/income/gonggaoconter', this.$qs.stringify({id, uid}))
      .then(result => {
        this.data = result.data.data
      })
    }
  }
}
</script>

<style>
  .box {
    padding: .3rem .3rem;
    height: 100%;
    width: 100%;
    background: #fff
  }
</style>
