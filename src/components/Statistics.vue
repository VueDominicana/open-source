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
import { mapState } from "vuex";

export default {
  name: "Statistics",
  computed: {
    ...mapState({
      developers: state => state.Developers.developers,
      repositories: state => state.Repositories.repositories,
      developersWithMoreThanTenRepos: state => state.About.developersWithMoreThanTenRepos,
      reposWithMoreThanOneStar: state => state.About.reposWithMoreThanOneStar,
      reposContributionAvg: state => state.About.reposContributionAvg,
      reposLanguages: state => state.About.reposLanguages,
      lessUsedLanguages: state => state.About.lessUsedLanguages
    })
  }
};
</script>

<style lang="scss" scoped></style>
