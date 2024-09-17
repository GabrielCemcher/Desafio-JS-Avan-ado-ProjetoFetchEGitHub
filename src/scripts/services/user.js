import { baseUrl } from "../variables.js"

async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export {getUser}




console.log(await getUser('devemdobro'));
