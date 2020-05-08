import axios from "axios";

const API_ENDPOINT = "https://developersdo.github.io/opensource/data";

export default {
  getDevelopers() {
    return axios.get(`${API_ENDPOINT}/users.json`).then(({ data }) => data);
  },

  getRepositories() {
    return axios.get(`${API_ENDPOINT}/repos.json`).then(({ data }) => data);
  }
};
