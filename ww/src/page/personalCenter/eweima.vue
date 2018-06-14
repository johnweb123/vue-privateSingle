<template>
  <div>

    <page-header :title="'推广二维码'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'" :leftText="'返回'" rightText="保存" :href="img"></page-header>
    
    <div>
      <img :src="img" style="width:100%">
      <input type="text" id="copytxt" v-model="url_short">
      <yd-button
        size="large"
        type="primary"
        class="btn"
        data-clipboard-action="copy"
        data-clipboard-target="#copytxt"
        @click="copytxt">点击复制链接</yd-button>
    </div>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      img: '',
      url_short: ''
    }
  },
  components: {
    pageHeader
  },
  mounted () {
    this._getData()
    var clipboard = new Clipboard('.btn')
  },
  methods: {
    _getData () {
      let pid = this.$route.query.id
      let uid = localStorage.getItem('uid')
      this.$axios.post(this.$store.state.G_HOST+'/app/product/scqrcode', this.$qs.stringify({pid, uid}))
        .then(result => {
          this.img = result.data.data.img_url
          this.url_short = result.data.data.url_short
        })
    },
    toastNone () {
        this.$dialog.toast({
            mes: '复制成功',
            timeout: 1500
        });
    },
    copytxt () {
      this.toastNone()
    }
  }
}
</script>

<style>
  #copytxt {
    opacity: 0;
    height: 8px;
  }
  .yd-btn-block {
    margin-top: 0;
  }
</style>
