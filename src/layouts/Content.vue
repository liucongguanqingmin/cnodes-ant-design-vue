<template>
  <div id="app">
    <span v-for="(item, i) in all.data" :key="i">
      {{ item.id }}
    </span>
  </div>
</template>

<style lang="less" scoped></style>

<script>
import axios from "axios";
export default {
  data() {
    console.log("nav is:" + this.nav);
    return {
      all: []
    };
  },
  props: ["nav"],
  mounted() {
    axios
      .get("https://cnodejs.org/api/v1/topics?page=1&&limit=5")
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
