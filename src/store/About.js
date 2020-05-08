import sortBy from "lodash/sortBy";

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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
