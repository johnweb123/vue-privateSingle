<template>
  <div>

    <pageHeader :title="title" :bgcolor="'#44c125'" :leftIcon="'leftArrow'"></pageHeader>

    <div class="content">
      <p class="title">{{ title }}</p>
    <p> {{ timestampToTime(time) }}</p>
    <div class="text">{{ conter }}</div>
    </div>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      type: '',
      conter: '',
      time: '',
      title: ''
    }
  },
  components: {
    pageHeader
  },
  mounted () {
    this.type = this.$route.query.type
    this.$axios.post(`http://m.jubao520.com/app/index/${this.type}`)
      .then(result => {
        let {conter, time, title} = result.data.data
        this.conter = conter
        this.time = time
        this.title = title
      })
      .catch(error => {})
  },
  methods: {
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
  .title {
    font-size: .4rem;
    margin-bottom: .3rem;
  }

  .content {
    padding: .3rem;
    background-color: #fff
  }

  .text {
    line-height: .8rem;
    text-indent:2em
  }
</style>
