<template>
  <div>

    <page-header :title="data.title" :bgcolor="'#44c125'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header>

    <div v-html="data.remark" style="width:100%">

    </div>

    <div class='promote'>
      <span @click="qRCode">立即推广</span>
    </div>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      id: '',
      data: {}
    }
  },
  mounted () {
    this._getdata()
  },
  components: {
    pageHeader
  },
  methods: {
    _getdata () {
      this.id = this.$route.query.id
      this.$axios.post(this.$store.state.G_HOST+'/app/product/yjshuoming', this.$qs.stringify({pid: this.id}))
        .then(result => {
          this.data = result.data.data
        })
    },
    qRCode () {
      this.$router.push({path:'/eweima', query: {id: this.id}})
    }
  }
}
</script>

<style lang="less" scoped>
  .promote {
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100%;

    span {
      background-color: #91c7e6;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0 auto;
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      line-height: 1.5rem;
      color:#fff;
    }
  }
</style>
