import map from "lodash/map";

import API from "@/util/api";
// TODO: Move the developers and repositories to its own store.
const state = {
  developers: [],
  repositories: []
};

const mutations = {
  SET_DEVELOPERS(state, developers) {
    state.developers = developers;
  },
  SET_REPOSITORIES(state, repositories) {
    state.repositories = repositories;
  }
};

const actions = {
  async getDevelopers({ commit }) {
    const developers = await API.getDevelopers().catch(e => {
      console.error(e);

      return [];
    });

    commit("SET_DEVELOPERS", developers);
  },
  getDeveloperByUsername(context, username) {
    return state.developers.find(developer => developer.login === username);
  },
  async getRepositories({ commit }) {
    const repositories = await API.getRepositories().catch(e => {
      console.error(e);

      return [];
    });

    commit("SET_REPOSITORIES", repositories);
  }
};

const getters = {
  mostPopularLanguage(state, getters) {
    return getters.reposLanguages.slice(0, 10);
  },
  developers(state) {
    return state.developers;
  },
  repositories(state) {
    return state.repositories;
  },
  developersWithMoreThanTenRepos(state) {
    return state.developers.filter(developer => developer.sources > 10).length;
  },
  reposWithMoreThanOneStar(state) {
    return state.repositories.filter(repo => repo.stargazers > 1).length;
  },
  reposContributionAvg(state) {
    return (state.repositories.length / state.developers.length).toFixed(1);
  },
  reposLanguagesTotals(state) {
    return state.repositories.reduce((total, repo) => {
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
  reposLanguages(state, getters) {
    return map(getters.reposLanguagesTotals, (total, name) => ({
      name,
      total,
      percentage: ((total / state.repositories.length) * 100).toFixed(2)
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
