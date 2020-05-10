import API from "@/util/api";

const state = {
  repositories: []
};

const mutations = {
  SET_REPOSITORIES(state, repositories) {
    state.repositories = repositories;
  }
};

const actions = {
  async getRepositories({ commit }) {
    const repositories = await API.getRepositories().catch(e => {
      console.error(e);

      return [];
    });

    commit("SET_REPOSITORIES", repositories);
  }
};

const getters = {
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
