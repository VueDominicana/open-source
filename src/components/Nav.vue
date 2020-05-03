<template>
  <div class="header-wrapper blue darken-1">
    <nav class="header container blue darken-1">
      <div class="logo">
        <div class="brand-logo">
          <svg viewBox="0 0 48 48">
            <path
              d="M39.13,39V26.18l0,0H32l0,0V43.74l0,0A21.15,21.15,0,0,1,27.57,45a0,0,0,0,1,0,0V32.2l0,0H20.47l0,0V45.29l0,0H16l0,0V35.75l0,0H8.88l0,0v9.54l0,0H2.71l0,0V2.71l0,0h21A21.47,21.47,0,0,1,45.29,24.9,21.24,21.24,0,0,1,39.16,39,0,0,0,0,1,39.13,39Z"
            />
          </svg>
          <span>Dominican Open Source</span>
        </div>
      </div>
      <ul class="sections">
        <li :class="{ active: ['PopularRepositories', 'NewRepositories'].includes($route.name) }">
          <router-link to="/repositories/popular">Repositories</router-link>
        </li>
        <li :class="{ active: ['PopularDevelopers', 'RecentlyJoinedDevelopers'].includes($route.name) }">
          <router-link to="/developers/popular">Developers</router-link>
        </li>
        <li :class="{ active: $route.name == 'About' }">
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  .header {
    display: flex;
    justify-content: space-between;
    box-shadow: none;
    align-items: center;

    .brand-logo {
      position: initial;
      color: #fff;
      font-size: 1.9rem;
      svg {
        fill: currentcolor;
        width: 1.5em;
        vertical-align: middle;
        margin-right: 8px;
      }
      span {
        font-size: 2.1rem;
      }
    }

    ul {
      display: flex;
      li {
        font-size: 1em;
      }
    }
  }
}
</style>
