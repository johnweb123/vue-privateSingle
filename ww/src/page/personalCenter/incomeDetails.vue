<template>
  <div>
    <!-- 头部信息 -->

    <pageHeader :title="'收入明细'" :bgcolor="'#44c125'" :leftIcon="'leftArrow'"></pageHeader>

    <yd-cell-group>
        <yd-cell-item arrow href="/promotionIncomeDetails" type="link">
            <yd-icon slot="icon" name="order" size=".42rem"></yd-icon>
            <span slot="left">推广收入</span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" :href="'/loanIncomeDetails'">
            <yd-icon slot="icon" name="like-outline" size=".42rem"></yd-icon>
            <span slot="left">贷款收入</span>
        </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
import pageHeader from '../components/page-header'
export default {
  components: {
    pageHeader
  }
}
</script>
