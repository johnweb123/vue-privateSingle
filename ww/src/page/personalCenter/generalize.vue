<style lang="less" scoped>
@import '../../less/_var.less';
.generalize {

  // 佣金产品
  .product {
    .product_select {
      .yd-btn-primary {
        width: 17%;
        margin: .1rem;
        padding: 0;
      }
      .btn {
        background-color: #3e76f6 !important;
        color: #fff !important;
      }
      .yd-btn {
        color: #666;
        background-color: #ded7d7;
        overflow: hidden;
      }
    }

    .advertising-img {
      width: 100%;
      height: 2rem;
      margin: .12rem 0;
    }
    
    .product-list {
      padding: 6px .3rem 0 .3rem;
      border-bottom: 3px solid @color;
      position: relative;
      margin-top: 7px;
      .list-img {
        width: .7rem;
        height: .7rem;
        margin-right:.2rem;
      }
      .list-item {
        display: flex;
        align-items: center;
        padding-bottom: 6px;
        border-bottom: 1px solid #eae4e4;
        >div {
          flex: 1
        }
        .item-x {
          color:#44c125;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          width:50%;
          height: .35rem
        }
        .list-item-p {
          margin: 6px 0;
          text-align:left;
          span.last {
            position: absolute;
            right:.3rem;
          }
        }
      }
      .product-list-bottom {
        height: 32px;
        line-height:32px;
      }
      .agent {
        position: absolute;
        top:  0rem;
        right:.3rem;
        padding: 3px 6px;
        color: @color;
        border:1px solid @color;
      }
    }
  }


  //  客户列表
  .client-list {
    li {
      padding: 6px 14px;
      border-bottom: 1px solid #ddd;
      p {
        line-height: .45rem;
        color: #989595
      }
    }
  }

  //  英雄排行榜
  .rank {}

  //  常见问题
  .issue {}
}
</style>
<template>
  <div class="generalize">
    <!-- 头部 start -->
    <!-- <yd-navbar title="蚂蚁地推" bgcolor="#44c125" color="#fff">
      <router-link to="/personalCenter" slot="left">
          <img class="icon-back" src="../../../static/img/return_back.png" alt="">
      </router-link>
    </yd-navbar> -->

    <page-header :title="'亿客地推'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header> 
    <!-- 头部 end -->

    <yd-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick" active-color="#44c125">
        <yd-tab-panel v-for="(item, index) in items" :label="item.label" :key="index">
          <!-- 佣金产品 start -->
          <div class="product" v-show="item.type === 'product'">
            <div class="product_select">
              <yd-button :class="{'btn': selected === item.id}" v-for="(item, index) in productList" :key="index" @click.native="select(item)">{{item.name}}</yd-button>
            </div>

            <img class="advertising-img" src="http://static.ydcss.com/uploads/ydui/1.jpg">
            
            <div>
            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
              <div class="product-list" v-for="item in dataList" slot="list" theme="1">
                <div class="list-item">
                  <!--img class="list-img" :src="item.pic"-->
                  <div>
                    <p style="font-size: .3rem">{{ item.title }}</p>
                    <p class="list-item-p">
                      <span style="color: red">{{ item.edname }}</span>
                      <span class="last">{{ item.sold }}</span>
                    </p>
                    <p class="item-x">{{ item.feature }}</p>
                  </div>
                </div>
                <div class="product-list-bottom">{{ item.fyname }}</div>
                <button class="agent">立即代理</button>
              </div>

              <!-- 数据全部加载完毕显示 -->
              <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

              <!-- 加载中提示，不指定，将显示默认加载中图标 -->
              <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

            </yd-infinitescroll>
            </div>
          </div>
          <!-- 佣金产品 end -->

          <!-- 客户列表 start -->
          <div class="client-list" v-show="item.type === 'client-list'">
             <ul>
                <li v-for="(item, index) in clientList" :ket="index">
                  <p>
                    <span>产品:</span>
                    {{ item.product_name }}
                  </p>
                  <p>
                    <span>申请人:</span>
                    {{ item.username }}
                  </p>
                  <p>
                    <span>联系方式:</span>
                    {{ item.phone }}
                  </p>
                  <p>
                    <span>申请时间</span>
                    {{ item.time }}
                  </p>
                  <p>
                    <span>结算时间:</span>
                    {{ item.jiesuan_time }}
                  </p>
                  <p>
                    <span>结算金额:</span>
                    {{ item.jisuan_yongjin }}
                  </p>
                </li>
             </ul>
          </div>
          <!-- 客户列表 end -->

          <!-- 英雄排行榜 start -->
          <div class="rank" v-if="item.type === 'rank'">
             rank
          </div>
          <!-- 英雄排行榜 end -->

          <!-- 常见问题 start -->
          <div class="issue" v-if="item.type === 'issue'">
             
          </div>
          <!-- 常见问题 end -->
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll'
  import pageHeader from '../components/page-header'
  Vue.component(InfiniteScroll.name, InfiniteScroll)
  export default {
    name: 'generalize',
    data () {
      return {
        tab2: 0,
        items: [
            {label: '佣金产品', type: 'product'},
            {label: '客户列表', type: 'client-list'},
            {label: '英雄排行榜', type: 'rank'},
            {label: '常见问题', type: 'issue'}
        ],
        type: 'rank',
        productList: [],  //  选项列表
        dataList: [],   //   数据列表
        clientList: [],
        selected: '-1',   //  选项列表样式调整
        cate_id: '-1',  //   选项列表id
        productPage: 1,  //  佣金产品page
        clientPage: 1   //   客户列表 page
      }
    },
    components: {
      pageHeader
    },
    mounted () {
      this._getclassify()
      this._getProductData()
    },
    methods: {
      //  滚动加载事件
      loadList () {
        console.log(this.productPage)
        this.productPage++
        console.log(this.productPage)
        this._getProductData()
        // this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad')
      },
      //  选项列表样式调整
      select (item) {
        this.selected = item.id
        this.cate_id = item.id
        this._getProductData()
      },
      fn (label, key) {
        if (key === 0) this._getProductData()   //  切换佣金产品获取数据
        if (key === 1) this._getOurClient()   //  切换客户列表获取数据
        console.log(label, key)
      },
      itemClick (key) {
        this.type = this.items[key].type
        setTimeout(() => {
          this.tab2 = key
        })
      },
      //  获取选项列表名称
      _getclassify () {
        this.$axios.post('http://m.jubao520.com/app/product/yjcate')
          .then(res => {
            if (res.data.code === 1) {
              this.productList = [{name: '全部', id: '-1'}, ...res.data.data]
            }
          })
      },
      //  获取佣金产品列表数据
      _getProductData () {
        let data
        this.cate_id === '-1'
            ? data = {page: this.productPage}
            : data = {cate_id: this.cate_id, page: this.productPage}
        this.$dialog.loading.open('数据加载中')
        this.$axios.post('http://m.jubao520.com/app/product/yjlist', this.$qs.stringify(data)).then(res => {
          setTimeout(() => {
            this.$dialog.loading.close()
          }, 1000)
          if (res.status === 200) {
            this.dataList = [...this.dataList, ...res.data.data]
          }
        }).catch(err => {
          this.$dialog.loading.close()
          console.log(err)
        })
      },
      //  获取客户列表数据
      _getOurClient () {
        this.$dialog.loading.open('数据加载中')
        this.$axios.post('http://m.jubao520.com/app/product/kehulist', this.$qs.stringify({uid: 918, page: this.clientPage}))
          .then(res => {
            this.$dialog.loading.close()
            console.log(res.data.data)
            if (res.data.code === 1) this.clientList = res.data.data
          })
          .catch(() => {
            this.$dialog.loading.close()
          })
      }
    }
  }
</script>
