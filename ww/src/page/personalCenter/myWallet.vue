<template>
  <div>

    <pageHeader :title="'提现'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'"></pageHeader>

    <div class="money">
      <yd-flexbox>
        <yd-flexbox-item>{{daishenhe}}</yd-flexbox-item>
        <yd-flexbox-item>{{yitixian}}</yd-flexbox-item>
        <yd-flexbox-item>{{yuee}}</yd-flexbox-item>
    </yd-flexbox>
    <yd-flexbox>
        <yd-flexbox-item>待审核</yd-flexbox-item>
        <yd-flexbox-item>已提现</yd-flexbox-item>
        <yd-flexbox-item>金币余额</yd-flexbox-item>
    </yd-flexbox>
    </div>

    <yd-cell-group>
        <yd-cell-item>
            <span slot="left">金额：</span>
            <yd-input slot="right" required v-model="money" max="10" placeholder="请输入提现金额"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">支付宝账号：</span>
            <yd-input slot="right" required v-model="zfnum" max="20" placeholder="请输入支付宝账号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">支付宝姓名：</span>
            <yd-input slot="right" required v-model="zfname" max="20" placeholder="请输入支付宝姓名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">手机号：</span>
            <yd-input slot="right" regex="mobile" v-model="zfphone" ref="zfphone" max="20" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>

    <p class="ps">温馨提示：提现时请确保您的支付宝账号及姓名的正确性，确保及时到账。</p>
    <p class="ps">提现时间：周一至周五，9::00-17.30</p>
    <p class="ps">提现当天到账，感谢您的支持</p>

    <yd-button-group>
        <yd-button size="large" type="primary" @click.native="_postData">立即提现</yd-button>
    </yd-button-group>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      yuee: '',
      yitixian: '',
      daishenhe: '',
      money: '',
      zfnum: '',
      zfname: '',
      zfphone: ''
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
      let uid = localStorage.getItem('uid')
      this.$axios.post(this.$store.state.G_HOST+'/app/income/myqian',this.$qs.stringify({uid}))
        .then(result => {
          let {yuee, yitixian, daishenhe} = result.data.data
          this.yuee = yuee
          this.yitixian = yitixian
          this.daishenhe = daishenhe
        })
    },
    _postData () {
      let {money, zfnum, zfname, zfphone} = this
      const input = this.$refs.zfphone;
      let uid = localStorage.getItem('uid')
      if (!/^[0-9]*$/.test(money)) return this.openAlert('请填写正确的金额')
      if (!input.valid) return this.openAlert(input.errorMsg)
      this.$axios.post(this.$store.state.G_HOST+'/app/income/mytiqian',this.$qs.stringify({
        money,
        zfnum,
        zfname,
        zfphone,
        uid
      }))
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

<style>
  .money {
    color:#e4393c;
    line-height: .7rem;
    text-align: center;
    background-color: #fff;
    margin-bottom: .2rem;
  }
  .ps {
    line-height: .4rem;
    padding: 0 .3rem
  }
</style>
