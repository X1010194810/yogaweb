<template>
  <div id="app">
    <!--头部-->
    <Header></Header>
    <!--内容-->
    <div class="container content-body">
      <router-view></router-view>
    </div>
    <!--底部-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "@/components/Footer";
  import Header from "@/components/Header";

  export default {
    name: 'App',
    components: {
      Footer
      , Header
    }
  }
</script>

<style scoped>
  .content-body {
    user-select: none;
    min-height: 580px;
    padding: 10px;
  }
</style>
