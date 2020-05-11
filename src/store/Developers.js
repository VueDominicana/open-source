import API from "@/util/api";

const state = {
  developers: []
};

const mutations = {
  SET_DEVELOPERS(state, developers) {
    state.developers = developers;
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
