<template>
  <div class="header-wrapper">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <div class="logo">
          <router-link to="/" class="brand-logo center">
            <svg viewBox="0 0 48 48">
              <path
                d="M39.13,39V26.18l0,0H32l0,0V43.74l0,0A21.15,21.15,0,0,1,27.57,45a0,0,0,0,1,0,0V32.2l0,0H20.47l0,0V45.29l0,0H16l0,0V35.75l0,0H8.88l0,0v9.54l0,0H2.71l0,0V2.71l0,0h21A21.47,21.47,0,0,1,45.29,24.9,21.24,21.24,0,0,1,39.16,39,0,0,0,0,1,39.13,39Z"
              />
            </svg>
            <span class="hide-on-small-only">Dominican Open Source</span>
          </router-link>
        </div>
        <a href="#" data-target="mobile-nav" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
        <ul class="sections right hide-on-med-and-down">
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
      </div>
    </nav>
    <ul class="sections sidenav sidenav-close" id="mobile-nav">
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
  </div>
</template>

<script>
export default {
  name: "Nav",
  mounted() {
    M.AutoInit();
  }
};
</script>

<style lang="scss" scoped>
.brand-logo {
  color: #fff;
  font-size: 1.9rem;
  svg {
    fill: currentcolor;
    width: 1.5em;
    vertical-align: middle;
    margin-right: 8px;
    margin-top: -5px;
  }
  span {
    font-size: 2.1rem;
  }
}
@media screen and (max-width: 768px) {
  .brand-logo {
    span {
      font-size: 1.6rem;
    }
  }
}
</style>
