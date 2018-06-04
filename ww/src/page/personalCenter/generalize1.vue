<style lang="less" scoped>
.generalize {
  .icon-back {
    width: 13px;
    height: 19px;
  }
}
</style>
<template>
  <div class="generalize">

    <page-header :title="'蚂蚁地推'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'"></page-header> 
    <!-- 头部 end -->

    <yd-tab v-model="tab2" :callback="fn" :prevent-default="false" :item-click="itemClick" active-color="#44c125">
        <yd-tab-panel v-for="(item, index) in items" :label="item.label" :key="index"></yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
  import pageHeader from '../components/page-header'
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
        type: ''
      }
    },
    components: {
      pageHeader
    },
    methods: {
      fn (label, key) {
        console.log(label, key)
      },
      itemClick (key) {
        this.type = this.items[key].type
        setTimeout(() => {
          this.tab2 = key
        }, 1000)
        this._getData()
      },
      _getData () {
        console.log(this.type)
        this.$dialog.loading.open('数据加载中')
        this.$axios.get('static/data/personalCenter/personalCenter.json', {
          type: this.type
        }).then(res => {
          setTimeout(() => {
            this.$dialog.loading.close()
          }, 1000)
          if (res.status === 200) {
            console.log(res)
          }
        }).catch(err => {
          this.$dialog.loading.close()
          console.log(err)
        })
      }
    }
  }
</script>
