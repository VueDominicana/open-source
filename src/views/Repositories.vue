<template>
  <div>
    <p>Repositories</p>
    <router-link class="md-subheading" to="/repositories/popular">Popular</router-link> |
    <router-link class="md-subheading" to="/repositories/new">New repositories</router-link>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
