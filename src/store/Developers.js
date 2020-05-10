import API from "@/util/api";

const state = {
  developers: []
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
  developers(state) {
    return state.developers;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
