<template>
  <div class="col m12 l6">
    <div>
      <h4>Statistics</h4>
      <ul class="collection">
        <li class="collection-item">
          <h4>
            <i class="material-icons">perm_identity</i>{{ developers.length.toLocaleString() }} developers
            <small>are contributing to open source.</small>
          </h4>
          <p>(organizations are not counted)</p>
          <p>
            Among that number of developers,
            <strong>{{ developersWithMoreThanTenRepos.toLocaleString() }} have more 10 repos</strong>.
          </p>
        </li>
        <li class="collection-item">
          <h4>
            <i class="material-icons">code</i>{{ repositories.length.toLocaleString() }} repos
            <small
              >created on GitHub. In average, each user contribute with
              {{ reposContributionAvg.toLocaleString() }} repos.</small
            >
          </h4>
          <p>(excluding forks)</p>
          <p>
            Interesting, the fact that there are
            <strong>{{ reposWithMoreThanOneStar.toLocaleString() }} repos with more than one star</strong>.
          </p>
        </li>
        <li class="collection-item">
          <h4>
            <i class="material-icons">assessment</i>{{ reposLanguages.length.toLocaleString() }} programming languages
            <small>in use across {{ repositories.length.toLocaleString() }} repos.</small>
          </h4>
          <p>
            The
            <strong>less used languages</strong> among dominican developers in open source via GitHub are:
            {{ lessUsedLanguages }}.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import map from "lodash/map";

export default {
  name: "Statistics",
  props: {
    repositories: {
      type: Array,
      required: true,
      default: () => []
    },
    developers: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    developersWithMoreThanTenRepos() {
      return this.developers.filter(developer => developer.sources > 10).length;
    },
    reposWithMoreThanOneStar() {
      return this.repositories.filter(repo => repo.stargazers > 1).length;
    },
    reposContributionAvg() {
      return (this.repositories.length / this.developers.length).toFixed(1);
    },
    reposLanguagesTotals() {
      return this.repositories.reduce((total, repo) => {
        if (!repo.languages.length) {
          return total;
        }

        return repo.languages.split(" ").reduce((sum, language) => {
          let languageTotal = sum[language] || 0;

          languageTotal++;

          return { ...sum, [language]: languageTotal };
        }, total);
      }, {});
    },
    reposLanguages() {
      return map(this.reposLanguagesTotals, (total, name) => ({
        name,
        total,
        percentage: ((total / this.repositories.length) * 100).toFixed(2)
      })).sort((a, b) => b.total - a.total);
    },
    lessUsedLanguages() {
      return this.reposLanguages
        .slice(-10)
        .map(lang => lang.name)
        .join(", ");
    }
  }
};
</script>

<style lang="scss" scoped></style>
