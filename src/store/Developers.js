import clone from "lodash/cloneDeep";
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
  },
  calculateStatistics({ commit, state, rootState }) {
    const developersCopy = clone(state.developers);

    rootState.Repositories.repositories.forEach(repository => {
      const developer = developersCopy.find(dev => dev.login === repository.name.split("/")[0]);

      if (developer) {
        developer.sources += 1;
        developer.forked += repository.forks;
      }
    });

    commit("SET_DEVELOPERS", developersCopy);
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
