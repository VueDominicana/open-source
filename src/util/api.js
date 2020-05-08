import axios from "axios";

axios.defaults.baseURL = "https://developersdo.github.io/opensource/data";

export default {
  getDevelopers() {
    return axios.get("/users.json").then(({ data }) => data);
  },
  getRepositories() {
    return axios.get("/repos.json").then(({ data }) => data);
  }
};
