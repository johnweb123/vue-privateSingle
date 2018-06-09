<template>
  <div class="generalize">

    <page-header :title="'亿客地推'" :bgcolor="'#53beb7'" :leftIcon="'leftArrow'" :leftText="'返回'"></page-header> 
    <!-- 头部 end -->

    <yd-tab v-model="tab2" active-color="#53beb7">
        <yd-tab-panel v-for="(item, index) in items" :label="item.label" :key="index">
          <!-- 佣金产品 start -->
          <div v-if="item.type === 'product'">
            <commissionList ></commissionList>
          </div>

          <!-- 客户列表 start -->
          <div class="client-list" v-if="item.type === 'client-list'">
             <clientList></clientList>
          </div>

          <!-- 英雄排行榜 start -->
          <div class="rank" v-if="item.type === 'rank'">
             <div class="error">暂时没有资料</div>
          </div>

          <!-- 常见问题 start -->
          <div class="issue" v-if="item.type === 'issue'">
             <div class="error">暂时没有资料</div>
          </div>
        </yd-tab-panel>
    </yd-tab>
  </div>
</template>

<script>
  import commissionList from './commissionList'
  import clientList from './clientList'
  import pageHeader from '../components/page-header'
  export default {
    name: 'generalize',
    data () {
      return {
        tab2: 0,
        items: [
            {label: '佣金产品', type: 'product'},
            {label: '客户列表', type: 'client-list'},
            {label: '亿客排行榜', type: 'rank'},
            {label: '常见问题', type: 'issue'}
        ]
      }
    },
    components: {
      pageHeader,
      commissionList,
      clientList
    }
  }
</script>

<style>
  .error {
    width: 100%;
    height: 20rem;
    text-align: center;
    background-color: #fff;
    padding-top: 2rem
  }
</style>
