<template>
  <div class="app-wrapper">
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <div>
          <span class="md-title">Dominican Open Source</span>
        </div>
        <div class="md-toolbar-section-end">
          <div class="md-xsmall-hide">
            <ul>
              <li><router-link class="md-subheading" to="/repositories/popular">Repositories</router-link></li>
              <li><router-link class="md-subheading" to="/developers/popular">Developers</router-link></li>
              <li><router-link class="md-subheading" to="/about">About</router-link></li>
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
</style>
