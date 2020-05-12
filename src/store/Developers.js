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
    let developer = state.developers.find(developer => developer.login === username);
    if (!developer) {
      developer = {};
      console.warn(
        `Could not find user by login: ${developer}, probably the user changed his login. ` +
          `More details at: https://github.com/developersdo/opensource/issues/89`
      );
    }

    return developer;
  }
};

const getters = {
  developers() {
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
