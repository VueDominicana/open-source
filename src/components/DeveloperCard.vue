<template>
  <div class="card hoverable">
    <div class="card-content center-align">
      <span class="developer__rank">#1</span>
      <a href="https://github.com/yyx990803" target="_blank">
        <img
          src="https://avatars3.githubusercontent.com/u/499550?s=400&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4"
          alt="evan yue profile image"
          class="developer__photo circle responsive-img"
        />
        <h3 class="card-title developer__name">Evan Yue</h3>
      </a>
      <p>Followed by: 585</p>
    </div>
    <div class="card-action">
      <ul class="developer__statistics">
        <li>0 repositories</li>
        <li>0 forks</li>
      </ul>
    </div>
    <div class="card-action">
      <a href="https://github.com/yyx990803" target="_blank" style="text-transform: lowercase;">
        https://github.com/yyx990803
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeveloperCard"
};
</script>

<style lang="scss" scoped>
.developer {
  &__rank {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 16px;
    font-weight: bold;
  }

  &__photo {
    width: 64px;
    height: 64px;
  }

  &__name {
    margin-top: -5px;
  }

  &__statistics {
    margin: 0;
  }
}
</style>
