<template>
  <div id="app">
    <div class="changes">
      <span>
        {{ createAt | formatDate }}
      </span>
      <span> {{ loginName }} <a :href="'/user/' + loginName">netRuby</a> </span>
      <span> {{ visitCount }} 次浏览 </span>
      <span> 来自 {{ tab }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.changes {
  font-size: 12px;
  color: #838383;
}
</style>

<script>
import formatDate from "@/utils/formatData.js";
export default {
  data() {
    return {};
  },
  props: ["createAt", "loginName", "visitCount", "tab"],
  filters: {
    formatDate: function(value) {
      return formatDate(value);
    }
  }
};
</script>
