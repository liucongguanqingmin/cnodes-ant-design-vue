<template>
  <a-layout id="components-layout-demo-fixed">
    <Header></Header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <div v-if="all.data === undefined">
        <loading>
          页面正在加载中，请稍后
        </loading>
      </div>
      <div v-else>
        <Title>
          {{ all.data.title }}
        </Title>
        <Publish
          :createAt="all.data.create_at"
          :loginName="all.data.author.loginname"
          :visitCount="all.data.visit_count"
          :tab="tab"
        ></Publish>
        <a-divider />
        <p v-html="all.data && all.data.content"></p>
      </div>
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
import Loading from "@/components/Loading.vue";
import Title from "@/components/Title.vue";
import Publish from "@/components/Publish.vue";
export default {
  data() {
    return {
      all: {},
      tab: "首页"
    };
  },
  components: {
    Header,
    Footer,
    Loading,
    Title,
    Publish
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
