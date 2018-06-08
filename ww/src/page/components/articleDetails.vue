<template>
  <div class="article-detail">
     <pageHeader :title="'详情'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'"></pageHeader>

    <div class="main">
      <h1>{{ data.title }}</h1>
      <div class="container" v-html="data.conter"></div>
    </div>
  </div>
</template>

<script>
import pageHeader from './page-header';

export default {
  name: 'article-detail',
  data () {
    return {
      data: {},
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.query.mid
    this.$axios.post(this.$store.state.G_HOST+'/app/mag/zxnei', this.$qs.stringify({id: this.id}))
      .then(result => {
        if (result.data.code === 1) {
          this.data = result.data.data
        }
      })
  },
  components: { pageHeader }
}
</script>

<style lang="less" scoped>
.main {
  padding: .2rem .2rem;
  h1 {
    font-size: .4rem;
    margin-bottom: .2rem;
  }
}
</style>
