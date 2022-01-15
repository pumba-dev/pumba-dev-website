import axios from "axios"

const request = axios.create({
    baseURL: "https://api.github.com/users/pumba-dev/repos",
    headers: { 'accept': 'application/vnd.github.v3+json' },
    params: {
        'sort': 'updated'
    }
})

export function getRepos() {
    return request.get();
}