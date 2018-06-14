<template>
  <div class="QRCode">
    <page-header :title="'扫码二维码'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'" rightText="保存" @page-right-click="rightClick" :href="img"></page-header>
      <!-- <a id="scl" @click="scl" download="app.jpg">下载</a> -->
      <img :src="img" style="width: 100%" alt="">
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  name: 'QRCode',
  data () {
    return {
      img: ''
    }
  },
  mounted () {
    this.getImg(`${this.$store.state.G_HOST}/app/index/fximg`)
  },
  methods: {
    rightClick () {
      
    },
    getImg () {
      let uid = localStorage.getItem('uid')
      this.$axios.post(`${this.$store.state.G_HOST}/app/index/fximg`, this.$qs.stringify({uid}))
        .then(result => {
          if (result.data.code == 1) this.img = result.data.data
        })
    },
    scl () {
      this.$axios.post()
    }
  },
  components: { pageHeader }
}
</script>
