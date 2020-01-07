<template>
  <div id="app">
    <span class="topic_full_title">
      <slot></slot>
    </span>
  </div>
</template>

<style lang="less" scoped>
.topic_full_title {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
