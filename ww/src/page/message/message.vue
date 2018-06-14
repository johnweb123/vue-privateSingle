<template>
  <div class="message">
    <!-- 选项卡 -->
    <yd-tab>
        <yd-tab-panel :label="item.title" v-for="(item, key) in tab" :key="key">
          <Scroll :id="item.id"> </Scroll>
        </yd-tab-panel>
    </yd-tab>

  </div>
</template>

<script>
import Scroll from '../components/infiniteScroll'
export default {
  name: 'message',
  data () {
    return {
      tab: {}
    }
  },
  components: {
    Scroll
  },
  mounted () {
    this._getTab()
  },
  methods: {
    _getTab () {
        this.$axios.post(this.$store.state.G_HOST+'/app/mag/cate')
            .then(result => { this.tab = result.data.data})
      }
  }
}
</script>

<style lang="less" scoped>
.message {
  margin-top: -1rem;
}
</style>
