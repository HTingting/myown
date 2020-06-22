<style lang="less">
  @import "../styles/index.less";
</style>
<template>
  <div class="container">
    <nav>
      <ul class="router-ul">
        <li><router-link target="_blank" to="/intersection">可视窗口测试</router-link></li>
        <li><router-link target="_blank" to="/pull-fresh">刷新窗口</router-link></li>
        <li><router-link target="_blank" to="/tabs">tab组件</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {

      }
    },
    mounted: function() {

    },
    beforeDestroy: function() {

    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
</style>
