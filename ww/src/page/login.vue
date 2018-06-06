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
  created () {
    if (localStorage.getItem('token')) {
      this.log()
    }
  },
  mounted () {
  },
  methods: {
    log () {
      debugger
      this.$router.push({path: '/home'})
    },
    greet () {
      // /* eslint-disable  */
      let {appphone, apppassword} = this

      let postData = this.$qs.stringify({
        appphone: appphone,
        apppassword: apppassword
      })
      this.$axios.post(this.$store.state.G_HOST+'/app/index/login', postData)
        .then(result => {
          if (result.data.code == 1) {
             localStorage.setItem('uid', result.data.data.user_id)
             localStorage.setItem('token', '123465798')
             this.$router.push({path:'/home'})
          } else {
            return this.openAlert(result.data.message)
          }
        })
    },
    openAlert(mes) {
        this.$dialog.alert({mes});
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
