<template>
  <div id="app">
    <div class="changes">
      <span> 发布于 {{ createAt | formatDate }} </span>
      <span>
        作者 <a :href="'/user/' + loginName">{{ loginName }}</a>
      </span>
      <span> {{ visitCount }} 次浏览 </span>
      <span> 来自 {{ tab }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.changes {
  font-size: 12px;
  color: #838383;
  span:before {
    content: "•";
  }
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
