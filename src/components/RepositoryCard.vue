<template>
  <div v-if="developer" class="row">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-content black-text">
          <header>
            <strong>#{{ repository.position }}</strong>
            <a :href="repository.url" target="_blank">{{ repository.name }}</a>
            <div class="star">
              <a :href="`${repository.url}/stargazers`" target="_blank">
                <i class="material-icons">star</i>
                <span>{{ repository.stargazers }}</span>
              </a>
            </div>
          </header>
          <p>
            {{ repository.description | parseEmoji }}
          </p>
        </div>
        <div class="card-action languages">
          <languages :languages="repository.languages" />
        </div>
        <div class="card-action user">
          <a :href="`https://github.com/${developer.login}`" target="_blank" class="center-items">
            <img class="responsive-img circle" width="32" :src="developer.avatarUrl" />
            <span>{{ developer.name }}</span>
          </a>
          <a :href="repository.url" class="center-items" target="_blank">
            <i class="material-icons">link</i>
            <span>Github Project</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import languages from "@/components/Languages";
import emoji from "node-emoji";

export default {
  name: "Repository",
  components: {
    languages
  },
  props: {
    repository: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      developer: null
    };
  },
  created() {
    this.getDeveloper();
  },
  filters: {
    parseEmoji(text) {
      if (!text) {
        return text;
      }
      return emoji.emojify(text);
    }
  },
  methods: {
    ...mapActions({
      getDeveloperByUsername: "Developers/getDeveloperByUsername"
    }),
    async getDeveloper() {
      const username = this.repository.name.split("/")[0];
      this.developer = await this.getDeveloperByUsername(username);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  font-size: 24px;
  margin-bottom: 10px;
  justify-content: center;
  strong {
    margin-right: 20px;
  }
  a {
    flex: 1;
  }
  .star {
    a {
      color: black;
      display: flex;
      align-items: center;
      i {
        margin-right: 3px;
      }
    }
  }
}

.user {
  display: flex;
  align-items: center;

  img,
  i {
    margin-right: 10px;
  }

  a,
  i {
    color: #039be5 !important;
  }

  .center-items {
    display: flex;
    align-items: center;
  }
}
</style>
