<template>
  <div>
    <AppNav />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppNav from "@/components/Nav";
export default {
  name: "App",
  components: {
    AppNav
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/global";

.md-content {
  padding: 16px;
  height: 100%;
}
</style>
