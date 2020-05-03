const state = {
  isLoading: false
};

const getters = {
  isLoading() {
    return state.isLoading;
  }
};

const actions = {
  setLoading({ commit }, isLoading) {
    commit("SET_LOADING", isLoading);
  }
};

const mutations = {
  SET_LOADING(state, isLoading) {
    state.isLoading = !!isLoading;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
