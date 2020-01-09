<template>
  <a-layout id="components-layout-demo-fixed">
    <Header></Header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
        <router-view name="Home"></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
</template>
<style lang="less" scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  float: left;
  background-image: url("//static2.cnodejs.org/public/images/cnodejs_light.svg");
}
</style>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";

export default {
  data() {
    return {
      nav: this.$route.query["tag"]
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>
