<template>
  <div>
    <h3 class="center-align">Popular Repositories</h3>
    <slot />
    <Repositories />
  </div>
</template>

<script>
import Repositories from "@/components/RepositoryCard";

export default {
  name: "PopularRepositories",
  components: {
    Repositories
  }
};
</script>

<style lang="scss" scoped></style>
