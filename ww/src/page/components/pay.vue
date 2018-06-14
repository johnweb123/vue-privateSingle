<template>
  <div class="pay">
    <div v-html="form">
        {{form}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pay',
  data () {
    return {
      form: ''
    }
  },
  mounted () {
    this._getData()
  },
  methods: {
    _getData () {
      let money = this.$route.query.money
      let uid = localStorage.getItem('uid')
      this.$axios.post(`${this.$store.state.G_HOST}/app/pay/fupay`, this.$qs.stringify({uid, money}))
        .then(result => {
          this.form = result.data
        })
    }
  }
}
</script>
