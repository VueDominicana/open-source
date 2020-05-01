import sortBy from "lodash/sortBy";

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
  ]
};

const mutations = {
  SET_LANGUAGES(state, languages) {
    state.popularLanguages = languages;
  }
};

const actions = {
  setPopularLanguages({ commit }, languages) {
    commit("SET_LANGUAGES", languages);
  }
};

const getters = {
  mostPopularLanguage() {
    return sortBy(state.popularLanguages, language => -language.value)[0];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
