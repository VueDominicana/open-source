import axios from "axios";

axios.defaults.baseURL = "https://raw.githubusercontent.com/DannyFeliz/opensource/develop/public/data";

export default {
  async getDevelopers() {
    const { data: developers } = await axios.get("/users.json");

    return developers;
  },
  async getRepositories() {
    const { data: repositories } = await axios.get("/repos.json");

    return repositories;
  }
};
