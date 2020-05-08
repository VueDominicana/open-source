import sortBy from "lodash/sortBy";
import map from "lodash/map";

import API from "@/util/api";

const state = {
  popularLanguages: [
    {
      name: "Java",
      value: 14
    },
    {
      name: "Javascript",
      value: 60
    },
    {
      name: "Python",
      value: 26
    }
  ],
  developers: [],
  repositories: []
};

const mutations = {
  SET_LANGUAGES(state, languages) {
    state.popularLanguages = languages;
  },
  SET_DEVELOPERS(state, developers) {
    state.developers = developers;
  },
  SET_REPOSITORIES(state, repositories) {
    state.repositories = repositories;
  }
};

const actions = {
  setPopularLanguages({ commit }, languages) {
    commit("SET_LANGUAGES", languages);
  },
  async getDevelopers({ commit }) {
    const developers = await API.getDevelopers().catch(e => {
      console.error(e);

      return [];
    });

    commit("SET_DEVELOPERS", developers);
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
  mostPopularLanguage(state) {
    return sortBy(state.popularLanguages, language => -language.value)[0];
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
