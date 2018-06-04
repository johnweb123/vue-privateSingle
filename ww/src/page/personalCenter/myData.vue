<template>
  <div>

    <pageHeader :title="'我的资料'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'"></pageHeader>
    <!-- 我的资料 -->
    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">姓名：</span>
            <yd-input slot="right" required v-model="true_name" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">昵称：</span>
            <yd-input slot="right" type="password" v-model="nickname" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">手机号：</span>
            <yd-input slot="right" v-model="appphone" :disabled="true"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">微信：</span>
            <yd-input slot="right" required v-model="weixinnum" max="20" placeholder="请输入用户名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <yd-textarea slot="right" v-model="qianming" placeholder="个人签名" maxlength="100"></yd-textarea>
        </yd-cell-item>
    </yd-cell-group>

      <yd-button-group>
          <yd-button size="large" type="primary" @click.native="postData">确认提交</yd-button>
      </yd-button-group>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      true_name: '',
      nickname: '',
      appphone: '',
      weixinnum: '',
      qianming: ''
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
      this.$axios.post('http://m.jubao520.com/app/income/mydata', this.$qs.stringify({uid: 918}))
        .then(result => {
          let {true_name, nickname, appphone, weixinnum, qianming} = result.data.data
          this.true_name = true_name
          this.nickname = nickname
          this.appphone = appphone
          this.weixinnum = weixinnum
          this.qianming = qianming
        })
    },
    postData () {
      let {true_name, nickname, weixinnum, qianming} = this
      this.$axios.post('http://m.jubao520.com/app/income/mydatasave', this.$qs.stringify({true_name, nickname, weixinnum, qianming, uid: 918}))
        .then(result => {
          // 资料修改与否提示
          result.data.code === -1
            ? this.openAlert(result.data.message)
            : this.openAlert(result.data.message)
        })
    },
    openAlert(message) {
        this.$dialog.alert({mes: message});
    }
  }
}
</script>
