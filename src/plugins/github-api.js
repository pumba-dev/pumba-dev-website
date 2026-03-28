import axios from "axios";

const USERNAME = "pumba-dev";

const request = axios.create({
  baseURL: `https://api.github.com/users/${USERNAME}/repos`,
  headers: { accept: "application/vnd.github.v3+json" },
  params: {
    sort: "created",
    per_page: 100,
  },
});

export function getRepos() {
  return request.get();
}
