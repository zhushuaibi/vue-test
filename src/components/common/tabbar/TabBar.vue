<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
@import "../../../assets/css/base.css";
.tabbar{
  display: flex;
  text-align: center;
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f6f6f6;
}
</style>
