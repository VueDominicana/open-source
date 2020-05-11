<template>
  <div>
    <loading :active="isLoading" />
    <AppNav />
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <FloatingActionButton />
  </div>
</template>

<script>
import AppNav from "@/components/Nav";
import FloatingActionButton from "@/components/FloatingActionButton";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "App",
  components: {
    Loading,
    AppNav,
    FloatingActionButton
  },
  computed: {
    isLoading() {
      return this.$store.getters["App/isLoading"];
    }
  },
  async mounted() {
    await this.$store.dispatch("App/setLoading", true);

    await Promise.all([
      this.$store.dispatch("Developers/getDevelopers"),
      this.$store.dispatch("Repositories/getRepositories")
    ]);

    await this.$store.dispatch("App/setLoading", false);
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
