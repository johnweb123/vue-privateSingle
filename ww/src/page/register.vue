<template>
  <div>
    <page-header :title="'注册账号'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header>
    <!-- logo -->
    <img class="login" src="../../static/img/logo.png" alt="">

    <!-- login -->
    <yd-cell-group>

          <yd-cell-item>
            <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
            <yd-input slot="right" v-model="appphone" ref="appphone" required :show-success-icon="false" :show-error-icon="false" regex="mobile" placeholder="请输入手机号码"></yd-input>

            <!-- ↓↓关键代码是这里↓↓ -->
            <yd-sendcode slot="right"
                         v-model="start1"
                         @click.native="sendCode1"
                         type="primary"
            ></yd-sendcode>
            <!-- ↑↑关键代码是这里↑↑ -->

        </yd-cell-item>

          <yd-cell-item>
              <span slot="left">密码：</span>
              <yd-input slot="right" type="password" v-model="apppassword" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
              <span slot="left">确认密码：</span>
              <yd-input slot="right" type="password" v-model="apprepassword" placeholder="请输入密码"></yd-input>
          </yd-cell-item>
          <yd-cell-item>
            <span slot="left">推荐人手机号：</span>
            <yd-input slot="right" v-model="t_phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
          <yd-cell-item>
            <span slot="left">验证码：</span>
            <yd-input slot="right" required v-model="appcode" max="6" placeholder="请输入验证码"></yd-input>
          </yd-cell-item>
      </yd-cell-group>

    <yd-button size="large" type="primary" @click.native="postData" bgcolor="#53beb7" color="#fff">注册</yd-button>
  </div>
</template>

<script>
import pageHeader from './components/page-header'
export default {
  data () {
    return {
      apppassword: '',
      start1: false,
      appcode: '',
      appphone: '',
      apprepassword: '',
      t_phone: ''
    }
  },
  components: {
    pageHeader
  },
  mounted () {
  },
  methods: {
    postData () {
      // /* eslint-disable  */
      let {appphone, apppassword, apprepassword, appcode, t_phone} = this

      let postData = this.$qs.stringify({
        appphone,
        apppassword,
        apprepassword,
        appcode,
        t_phone
      })
      if ( this.apppassword !== apprepassword ) return this.openAlert('两次输入的密码不一致')

      this.$axios.post(this.$store.state.G_HOST+'/app/index/register', postData)
        .then(result => {
          if (result.data.code == 1) {
            this.openAlert(result.data.message)
             this.$router.push({path:'/login'})
          } else {
            return this.openAlert(result.data.message)
          }
        })
    },
    // 手机验证码发送
    sendCode1() {
      const input = this.$refs.appphone
      if (!input.valid) {
        this.openAlert(input.errorMsg)
      } else {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {
            this.$axios.post(this.$store.state.G_HOST+'/app/index/yzmcode', this.$qs.stringify({appphone: this.appphone}))
              .then(result => {

                if (result.data.code == -1){
                    this.$dialog.loading.close();
                   return this.openAlert(result.data.message)
                }
                this.start1 = true;
                this.$dialog.loading.close();

                this.$dialog.toast({
                    mes: '已发送',
                    icon: 'success',
                    timeout: 1500
                });
              })
        }, 1000);
      }
    },
    openAlert(mes) {
        this.$dialog.alert({mes});
    }
  }
}
</script>

<style>
    .login {
      display: block;
      margin: 1rem auto;
      width: 2rem;
      height: 2rem
    }
</style>
