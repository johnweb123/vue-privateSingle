<template>
    <div class="Pos">
      <el-row>
       <el-col :span='7' id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border>
              <el-table-column prop="date" label="商品名称"></el-table-column>
              <el-table-column prop="name" label="数量"></el-table-column>
              <el-table-column prop="province" label="金额"></el-table-column>
              <el-table-column label="操作">
                 <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row,scope.$index)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div v-for="(item, index) in tableData" :key="index">
              {{item.date}}
              <el-button @click="url(index)">跳转2</el-button>              
            </div>
            <div class="top10">
              <el-button type="warning">结账</el-button>
              <el-button type="danger" @click="del">清算</el-button>
              <el-button type="success">挂单</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second" prop="b">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third" prop="c">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth" prop="d">定时任务补偿</el-tab-pane>
        </el-tabs>
       </el-col>
       <el-col :span='11'>
          产品栏
          <router-link :to="data1">跳转1</router-link>
          <el-button @click="url(index)">跳转2</el-button>
       </el-col>
      </el-row>
    </div>
</template>

<script>
import img1 from '../../../static/img/logo.png'
import left from '@/components/common/left.vue'
export default {
  name: 'Pos',
  data () {
    return {
      message: img1,
      data: '/helloworl',
      pop: {
        goodName: '',
        nub: '',
        money: ''
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      form: {
        name: 1
      }
    }
  },
  // 声明组件
  components: {
    left
  },
  // 数据运算
  computed: {
    data1 () {
      return this.data + 'd'
    }
  },
  // 函数方法
  mounted () {
    var orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px'
  },
  // 监听
  watch: {},
  // 接收来自父组件的数据
  props: {},
  methods: {
    handleClick (a, b) {
      this.tableData.splice(b, 1)
      this.fun(b)
    },
    fun (b) {
      alert(b)
    },
    del () {
      this.form.name++
      this.tableData.length = 8
      console.log(this.tableData[1].name)
      // let url = 'adasd'
      // axios.get(url)
      //   .then((res) => {
      //     if (res.code === 200) {
      //       axios.get(url)
      //         .then(() => {
      //           this
      //         })
      //         .catch()
      //     }
      //   })
      //   .catch(() => {})
    },
    url (index) {
      this.$router.push({path: '/helloworld', query: {index: 5}})
    }
  },
  created () {},
  // mounted () {},
  updated () {},
  destroyed () {}
}
</script>

<style>
    li{list-style:none}
    .top10{
      margin-top: 10px
    }
</style>
