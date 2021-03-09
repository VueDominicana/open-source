import map from "lodash/map";

const state = {
  mostPopularLanguages: [],
  developersWithMoreThanTenRepos: 0,
  reposWithMoreThanOneStar: 0,
  reposContributionAvg: 0,
  reposLanguagesTotals: {},
  reposLanguages: [],
  lessUsedLanguages: ""
};

const mutations = {
  SET_MOST_POPULAR_LANGUAGES(state, languages) {
    state.mostPopularLanguages = languages;
  },
  SET_DEVELOPERS_WITH_MORE_THAN_TEN_REPOS(state, developers) {
    state.developersWithMoreThanTenRepos = developers;
  },
  REPOS_WITH_MORE_THAN_ONE_STAR(state, repositories) {
    state.reposWithMoreThanOneStar = repositories;
  },
  SET_REPOS_WITH_CONTRIBUTION_AVG(state, repositories) {
    state.reposContributionAvg = repositories;
  },
  SET_LANGUAGE_TOTAL(state, languages) {
    state.reposLanguagesTotals = languages;
  },
  SET_REPOS_LANGUAGES(state, languages) {
    state.reposLanguages = languages;
  },
  SET_LESS_USED_LANGUAGES(state, languages) {
    state.lessUsedLanguages = languages;
  }
};

const actions = {
  mostPopularLanguages({ commit }) {
    const mostPopularLanguages = state.reposLanguages.slice(0, 10);
    commit("SET_MOST_POPULAR_LANGUAGES", mostPopularLanguages);
  },
  developersWithMoreThanTenRepos({ commit, rootState }) {
    const developersWithMoreThanTenRepos = rootState.Developers.developers.filter(developer => developer.sources > 10)
      .length;
    commit("SET_DEVELOPERS_WITH_MORE_THAN_TEN_REPOS", developersWithMoreThanTenRepos);
  },
  reposWithMoreThanOneStar({ commit, rootState }) {
    const reposWithMoreThanOneStar = rootState.Repositories.repositories.filter(repo => repo.stargazers > 1).length;

    commit("REPOS_WITH_MORE_THAN_ONE_STAR", reposWithMoreThanOneStar);
  },
  reposContributionAvg({ commit, rootState }) {
    const reposWithContributionsAvg = (
      rootState.Repositories.repositories.length / rootState.Developers.developers.length
    ).toFixed(1);

    commit("SET_REPOS_WITH_CONTRIBUTION_AVG", reposWithContributionsAvg);
  },
  reposLanguagesTotals({ commit, rootState }) {
    const languagesTotals = rootState.Repositories.repositories.reduce((total, repo) => {
      if (!repo.languages.length) {
        return total;
      }

      return repo.languages.split(" ").reduce((sum, language) => {
        let languageTotal = sum[language] || 0;

        languageTotal++;

        return { ...sum, [language]: languageTotal };
      }, total);
    }, {});

    commit("SET_LANGUAGE_TOTAL", languagesTotals);
  },
  reposLanguages({ commit, rootState }) {
    const reposLanguages = map(state.reposLanguagesTotals, (total, name) => ({
      name,
      total,
      percentage: ((total / rootState.Repositories.repositories.length) * 100).toFixed(2)
    })).sort((a, b) => b.total - a.total);
    commit("SET_REPOS_LANGUAGES", reposLanguages);
  },
  lessUsedLanguages({ commit }) {
    const lessUsedLanguages = state.reposLanguages
      .slice(-10)
      .map(lang => lang.name)
      .join(", ");

    commit("SET_LESS_USED_LANGUAGES", lessUsedLanguages);
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
