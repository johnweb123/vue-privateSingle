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

      <yd-flexbox>
        <yd-flexbox-item>
          <router-link to="/register" class="left">
            注册账号
          </router-link>
        </yd-flexbox-item>
        <yd-flexbox-item>
          <router-link to="/findPassword" class="right">
            忘记密码
          </router-link>
        </yd-flexbox-item>
      </yd-flexbox>
    <yd-button size="large" type="primary" @click.native="greet" style="width: 96%;margin: 1.5rem auto">登录</yd-button>
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
      this.$router.push({path: '/container/home'})
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
             sessionStorage.setItem('pop', true)
             this.log()
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
      margin: 1rem auto;
      width: 2rem;
      height: 2rem
    }
    .left {
      color: #53beb7;
      padding-left: .3rem;
    }
    .right {
      float: right;
      color: #53beb7;
      padding-right: .3rem;
    }
</style>
