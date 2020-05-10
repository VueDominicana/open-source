import map from "lodash/map";

const state = {};

const mutations = {};

const actions = {};

const getters = {
  mostPopularLanguage(state, getters) {
    return getters.reposLanguages.slice(0, 10);
  },
  developers(state, getters, { Developers: { developers } }) {
    return developers;
  },
  developersWithMoreThanTenRepos(state, getters) {
    return getters.developers.filter(developer => developer.sources > 10).length;
  },
  reposWithMoreThanOneStar(state, getters, { Repositories: { repositories } }) {
    return repositories.filter(repo => repo.stargazers > 1).length;
  },
  reposContributionAvg(state, getters, { Repositories: { repositories } }) {
    return (repositories.length / getters.developers.length).toFixed(1);
  },
  reposLanguagesTotals(state, getters, { Repositories: { repositories } }) {
    return repositories.reduce((total, repo) => {
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
  reposLanguages(state, getters, { Repositories: { repositories } }) {
    return map(getters.reposLanguagesTotals, (total, name) => ({
      name,
      total,
      percentage: ((total / repositories.length) * 100).toFixed(2)
    })).sort((a, b) => b.total - a.total);
  },
  lessUsedLanguages(state, getters) {
    return getters.reposLanguages
      .slice(-10)
      .map(lang => lang.name)
      .join(", ");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
