<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('created');
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave(to,from,next) {
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>
