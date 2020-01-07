<template>
  <div id="app">
    <a-spin tip="Loading...">
      <div class="spin-content">
        <slot></slot>
      </div>
    </a-spin>
  </div>
</template>

<style lang="less" scoped>
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
