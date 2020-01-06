<template>
  <a-layout id="components-layout-demo-fixed">
    <Header></Header>

    <a-layout-content
      :style="{ padding: '0 50px', marginTop: '64px' }"
      v-html="all.data.content"
    >
    </a-layout-content>

    <a-layout-footer :style="{ textAlign: 'center' }">
      <Footer></Footer>
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped></style>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import axios from "axios";
export default {
  data() {
    return {
      all: {}
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    axios
      .get("https://cnodejs.org/api/v1/topic/" + this.$route.params.id)
      .then(response => {
        this.all = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>
