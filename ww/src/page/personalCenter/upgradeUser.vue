<template>
  <div>
      <page-header :title="'升级会员'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header>

      <yd-slider autoplay="3000">
          <yd-slider-item>
                  <img src="../../../static/img/upgradeUser/2222.jpg">
          </yd-slider-item>
          <yd-slider-item>
                <img src="../../../static/img/upgradeUser/3333.jpg">
          </yd-slider-item>
      </yd-slider>

      <yd-tab style="margin-bottom:2rem">
          <yd-tab-panel label="产品介绍">
            <img src="../../../static/img/upgradeUser/123.jpg" style="width:100%">
          </yd-tab-panel>
          <yd-tab-panel label="购买须知">
            <p>
              <span style="font-size: 14px; font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">&nbsp; &nbsp; 亿客是一个全新的综合金融信息服务平台，&nbsp;所有用户均可享受免费申请贷款、办卡,以及免费推广贷款、办卡，同时获得高额佣金，平台首创“普通大众+金融机构”的合作新模式，通过移动互联网让普通大众参与银行及吉荣机构的利润分配，探索全新的互联网金融发展模式。&nbsp;旨在改变P2P、银行、金融机构原有的推广及盈利模式，亿客的运营模式不仅为金融机构减轻运营成本，同时让大众享受金融领域福利，实现人人都是普惠金融家的梦想，实现多赢的局面。<br/>平台现已成功和浦发银行、兴业银行、平安银行、民生银行、宜信普惠、维信、&nbsp;拍拍贷、玖富等数十家网贷P2P金融机构及十数家银行机构合作，包含和上市银行、上市公司和中国百强金融机构达成的战略合作协议，后续我们将和国内更多的顶级银行、金融机构陆续展开服务，全方位的为亿客合作伙伴提供更专业、更全面的金融信息服务。<br/>亿客—人人都是金融家，人人掌握金融黑科技！<br/>1、购买成功后即可开通代理资格，开启包括今日口子、办卡提额、贷款中心、高下款推荐等平台所有功能的使用功能。<br/>2、代理会员使用权及其附加功能仅限于亿客平台使用，与本公司其他产品服务不共享。<br/>3、本产品仅限本人使用，不得进行转让及出售。<br/>4、亿客是一个金融信息服务平台，平台不涉及任何现金贷款及资金业务，也不保证会员贷款一定成功。<br/>5、亿客只提供金融信息服务，不涉及任何用户的金融数据，所以请用户放心使用。<br/>6、本产品属于线上服务类产品，一经购买即享受平台所有功能，因而不支持退货行为。<br/></span>
          </p>
          <p>
              <br/>
          </p>
          </yd-tab-panel>
          <yd-tab-panel label="常见问题">
            <p>
              <span style="font-family: 微软雅黑, &quot;Microsoft YaHei&quot;;">问：会员及非会员的区别？<br/>答：非会员可以免费申请贷款、办卡，会员享受代理权限，可以推广代理，推广贷款，均可获得佣金。<br/>问：拍拍贷、信而富、宜人贷、信用卡等全部产品多久计算佣金？<br/>答：周结或月结，从客户登记→注册→完善资料→提交申请→审批完成→金融机构反馈数据→反馈至代理后台至少需要3-5个工作日，因此每个产品的结算周期不同，具体参照返佣制度表！<br/>问：从你们平台申请贷款，你们需要收费吗？<br/>答：不用，免费申请。<br/>问：从你们平台申请贷款，是否更容易通过？<br/>答：平台和金融机构官方合作，由官方推荐通道，但是每个产品都有自己的大数据风控标准，主要还是看申请人自身的资质，平台不承诺包下款/包下卡。<br/>问：信用卡不是秒批吗？怎么两天了还没出结果？<br/>答：一般来说，如果申请人在银行数据较多，其大数据风控系统可在几秒钟到几十分钟的时间内出结果，并发送结果信息给申请者；反之，银行无法根据申请者现有足够数据快速做出判断，此时会给人工进行审核评估，就慢一些,&nbsp;所以需要耐心等待人工审批结果。<br/>问：白户能办卡/贷款吗？<br/>答：可以试着申请，一般审批结果可能慢一些。<br/>问：如果我推广产品有佣金了，佣金怎么给我？<br/>答：点击“会员”-“我的余额”，绑定就可以提现，工作时间提现，一般2小时内到账！<br/></span></p><p><br/></p>
          </yd-tab-panel>
      </yd-tab>
      <div class="foot">
        <yd-button type="danger" style="margin:.2rem">VIP会员</yd-button>
         <br>
         <div style="margin-left: .2rem;font-size: .4rem;">
           原价: {{oldmoney}}  现价：<span style="color:red"> {{money}} </span>
           <yd-button @click.native="show1 = true" size="large">购买</yd-button>
         </div>
    
        <yd-actionsheet :items="myItems1" v-model="show1" cancel="取消"></yd-actionsheet>
      </div>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  data () {
    return {
      money: 198, //现价
      oldmoney: 598, //原价
      show1: false,
      myItems1: [
        {
          label: '支付宝',
          callback: (message) => { //调用支付接口
              this.$dialog.toast({mes: '咔擦，此人太帅！'});
              /* 注意： callback: function() {} 和 callback() {}  这样是无法正常使用当前this的 */
              let data ={
                aliPayInfo,
                money,
                orderType,
                orderName
              }
              console.log(data)
          }
        }
      ],
      orderName: '', //订单名称
      aliPayInfo: '', //订单信息
      orderType: 3 //支付线路
    }
  },
  components: {
    pageHeader
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .yd-btn-primary {
    background-color: #ef4f4f;
    width: 33%;
    display: inline-block;
    margin: 0;
    float: right;
  }
  .foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
  }
</style>
