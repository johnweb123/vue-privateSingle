<template>
  <div>
    <div class="box">
      <yd-navbar title="支付结果" color="#fff" bgcolor="#53beb7"></yd-navbar>

      <div class="success-font-size">
        <img src="../../static/img/success.png" alt="">
        <br>
        <br>
        支付成功！
      </div>

      <div class="flex">
        <div class="flex-1">
          <router-link to="/container/home">
            <span class="link">返回首页</span>
          </router-link>
        </div>
        <div class="flex-1">
          <router-link to="/generalize">
            <span class="link">立即推广</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .box {
    margin-top: -1rem;
  }
  .success-font-size {
    margin-top: 3rem;
    font-size: .4rem;
    text-align: center;
  }
  .flex {
    display: flex
  }
  .flex-1 {
    flex: 1;
    text-align: center;
    line-height: 2rem;
  }
  .link {
    display: inline-block;
    height: 1rem;
    width: 2rem;
    background-color: rgb(83, 190, 183);
    line-height: 1rem;
    border-radius: 5px;
    color: #fff
  }
</style>
