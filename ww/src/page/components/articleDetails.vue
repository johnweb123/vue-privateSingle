<template>
  <div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      mid: ''
    }
  },
  mounted () {
    this.mid = this.$route.query.mid
    this.$axios.post(this.$store.state.G_HOST+'/app/Mag/uquanxian', this.$qs.stringify({mid: this.mid}))
      .then(result => {
        console.log(result)
      })
  }
}
</script>
