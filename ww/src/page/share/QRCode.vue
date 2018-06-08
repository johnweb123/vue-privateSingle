<template>
  <div class="QRCode">

    <page-header :title="'扫码二维码'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'" :rightText="'保存'" @page-right-click="rightClick"></page-header>

    <img :src="img" style="width: 100%"> 
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
    this.getImg()
  },
  methods: {
    rightClick () {
      window.open(this.img)
    },
    getImg () {
      let uid = localStorage.getItem('uid')
      this.$axios.post(`${this.$store.state.G_HOST}/app/index/fximg`, this.$qs.stringify({uid: uid}))
        .then(result => {
          if (result.data.code == 1) this.img = result.data.data
        })
    }
  },
  components: { pageHeader }
}
</script>
