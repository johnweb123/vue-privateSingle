<template>
  <div>
      <div class="product_select">
        <yd-button :class="{'btn': selected === item.id}" v-for="(item, index) in productList" :key="index" @click.native="select(item)">{{item.name}}</yd-button>
      </div>

      <img class="advertising-img" src="http://static.ydcss.com/uploads/ydui/1.jpg">

      <div>
        <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
            <div class="product-list" @click="commissionDetails(item.id)" v-for="(item,key) in dataList" :key="key" slot="list" theme="1">
                <div class="list-item">
                    <img class="list-img" :src="item.pic">
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
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      pageSize: 10,
      ol: 1,
      productList: [], // 佣金分类
      dataList: [], //佣金列表
      selected: '-1',   //  选项列表样式调整
      cate_id: '-1'  //   选项列表id
    }
  },
  mounted () {
    this._getclassify()
    this._getData()
  },
  methods: {
    //  获取佣金产品列表数据
    _getData () {
      let data
      this.cate_id === '-1'
          ? data = {page: this.page}
          : data = {cate_id: this.cate_id, page: this.page}
      this.$axios.post(this.$store.state.G_HOST+'/app/product/yjlist', this.$qs.stringify(data))
        .then(result => {
          this.dataList = result.data.data
        })
    },
    // 滚动加载
    loadList() {
      this.page++
      let data
      this.cate_id === '-1'
          ? data = {page: this.page}
          : data = {cate_id: this.cate_id, page: this.page}
      this.$axios.post(this.$store.state.G_HOST+'/app/product/yjlist', this.$qs.stringify(data))
        .then(result => {
          if (result.data.data.length !== 0 && Array.isArray(result.data.data)) {
            this.dataList = [...this.dataList, ...result.data.data]
          }
          if (result.data.data.length < this.pageSize) {
              /* 所有数据加载完毕 */
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
              return;
          }
          /* 单次请求数据完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
          }
        ).catch(err => {

        })
    },
    itemClick (key) {
      this.type = this.items[key].type
      setTimeout(() => {
        this.tab2 = key
      }, 0)
    },
    //  获取佣金类型
    _getclassify () {
      this.$axios.post(this.$store.state.G_HOST+'/app/product/yjcate')
        .then(res => {
          if (res.data.code === 1) {
            this.productList = [{name: '全部', id: '-1'}, ...res.data.data]
          }
        })
    },
    //  选项列表样式调整
    select (item) {
      this.selected = item.id
      this.cate_id = item.id
      this._getData()
    },
    commissionDetails (id) {
      this.$router.push({path: '/commissionDetails', query: {id}})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../less/_var.less';
  // 佣金产品
  
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
        font-size: .2rem;
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
        width: 1.3rem;
        height: 1.3rem;
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
          color:#53beb7;
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

</style>
