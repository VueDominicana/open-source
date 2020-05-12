<template>
  <div class="col s12 m6 l4">
    <div class="card hoverable">
      <div class="card-content center-align">
        <span class="developer__rank"># {{ developer.position }}</span>
        <a :href="`https://github.com/${developer.login}`" target="_blank">
          <img
            :src="developer.avatarUrl"
            :alt="`${developer.name} profile image`"
            class="developer__photo circle responsive-img"
          />
          <h3 class="card-title developer__name">{{ developer.name }}</h3>
        </a>
        <p>Followed by: {{ developer.followers }}</p>
      </div>
      <div class="card-action">
        <ul class="developer__statistics">
          <li>{{ developer.sources }} repositories</li>
          <li>{{ developer.forked }} forks</li>
        </ul>
      </div>
      <div class="card-action">
        <a :href="developer.url" target="_blank" class="developer__url">{{ developer.url }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeveloperCard",
  props: {
    developer: {
      type: Object,
      required: true
    }
  }
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

  &__url {
    text-transform: lowercase !important;
    word-break: break-all;
  }
}
</style>
