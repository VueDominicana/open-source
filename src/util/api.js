import axios from "axios";
import sortBy from "lodash/sortBy";

axios.defaults.baseURL = "https://developersdo.github.io/opensource-data";

export default {
  async getDevelopers() {
    const { data: developers } = await axios.get("/users.json");
    const sortedDevelopers = sortBy(developers, dev => -dev.followers);
    return sortedDevelopers.map((dev, position) => {
      dev.position = position + 1;
      return dev;
    });
  },
  async getRepositories() {
    const { data: repositories } = await axios.get("/repos.json");
    const sortedRepositories = sortBy(repositories, repo => -repo.stargazers);
    return sortedRepositories.map((repo, position) => {
      repo.position = position + 1;
      return repo;
    });
  }
};
