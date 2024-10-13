import { baseUrl, maxItems } from "../variables.js";

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?`);
    const repositories = await response.json();
    return repositories.slice(0, maxItems)
}

export {getRepositories}



