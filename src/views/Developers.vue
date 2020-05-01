<template>
  <div>
    <p>Developers</p>
    <router-link class="md-subheading" to="/developers/popular">Popular</router-link> |
    <router-link class="md-subheading" to="/developers/recently-joined">Recently joined</router-link>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
