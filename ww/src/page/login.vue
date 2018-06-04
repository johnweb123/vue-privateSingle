<template>
  <div>

    <!-- logo -->
    <img class="login" src="../../static/img/logo.png" alt="">

    <!-- login -->
    <yd-cell-group>
          <yd-cell-item>
              <span slot="left">用户名：</span>
              <yd-input slot="right" required v-model="appphone" max="20" placeholder="请输入用户名"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">密码：</span>
              <yd-input slot="right" type="password" v-model="apppassword" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
      </yd-cell-group>

    <yd-button size="large" type="primary" @click.native="greet">登录</yd-button>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
      appphone: '',
      apppassword: ''
    }
  },
  mounted () {
    // console.log(this.$store.state.token)
  },
  methods: {
    greet () {
      /* eslint-disable  */
      localStorage.setItem('token', '12358496854')
      let {appphone, apppassword} = this
      
      let postData = this.$qs.stringify({
        appphone: appphone,
        apppassword: apppassword
      })
      this.$axios.post('http://m.jubao520.com/app/index/login', postData)
        .then(res => {
          if(res.data.code == 1) localStorage.setItem('uid', res.data.data.user_id)
        })

      //  axios post 请求解决方法二
      // const url = 'http://m.jubao520.com/app/index/login'
      // let params = new URLSearchParams()
      // params.append('appphone', this.appphone)
      // params.append('apppassword', this.apppassword)
      // this.$axios({
      //   method: 'post',
      //   url: url,
      //   data: params
      // }).then(res => {
      //   console.log(res)
      // })
    }
  }
  // computed: mapState(["token"])
}
</script>

<style>
    .login {
      display: block;
      margin: 0 auto;
      width: 2rem;
      height: 2rem
    }
</style>
