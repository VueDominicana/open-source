<template>
  <div class="app-wrapper">
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <div class="brand-logo">
          <svg id="logo" viewBox="0 0 48 48">
            <path
              d="M39.13,39V26.18l0,0H32l0,0V43.74l0,0A21.15,21.15,0,0,1,27.57,45a0,0,0,0,1,0,0V32.2l0,0H20.47l0,0V45.29l0,0H16l0,0V35.75l0,0H8.88l0,0v9.54l0,0H2.71l0,0V2.71l0,0h21A21.47,21.47,0,0,1,45.29,24.9,21.24,21.24,0,0,1,39.16,39,0,0,0,0,1,39.13,39Z"
            />
          </svg>
          Dominican Open Source
        </div>
        <div class="md-toolbar-section-end">
          <div class="md-xsmall-hide">
            <ul>
              <li>
                <router-link class="md-subheading" to="/repositories/popular">Repositories</router-link>
              </li>
              <li>
                <router-link class="md-subheading" to="/developers/popular">Developers</router-link>
              </li>
              <li>
                <router-link class="md-subheading" to="/about">About</router-link>
              </li>
            </ul>
          </div>
        </div>
      </md-toolbar>
      <md-content>
        <router-view />
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
@import "./assets/global";

.app-wrapper {
  margin-top: -1px;
  .page-container {
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, 0.12);
    max-width: 1200px;
    margin: 0 auto;

    .md-title {
      color: white !important;
    }

    ul {
      list-style: none;
      display: flex;
      li {
        &:not(:last-child) {
          margin-right: 25px;
        }
        &:last-child {
          margin-right: 8px;
        }
      }
    }
  }
}

.md-content {
  padding: 16px;
  height: 100%;
}

.brand-logo {
  position: absolute;
  color: #fff;
  display: inline-block;
  font-size: 1.5rem;
  padding: 0;
  white-space: nowrap;
  #logo {
    color: rgb(255, 255, 255);
    fill: currentcolor;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    overflow: hidden;
  }
}
</style>
