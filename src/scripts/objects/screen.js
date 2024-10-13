const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil">
            <div class="data"
                <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                <p>${user.bio ?? 'Não possui bio cadastrado 😢'}</p>
                <p>${user.userName}</p>
                <p>Seguidores: ${user.seguidores}</p>
                <p>Seguindo: ${user.seguindo}</p>
            </div>
        </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens +=
         `<li>
            <a href="${repo.html_url}" target="_blank">${repo.name}
                <div class="repo-status">
                    <p>🍴 ${repo.forks_count ?? 'Sem forks'}</p>
                    <p>⭐ ${repo.stargazers_count ?? 'Sem estrelas '}</p>
                    <p>👀 ${repo.watchers_count ?? 'Sem viewers'}</p>
                    <p>👨‍💻 ${repo.language ?? 'Sem linguagem'}</p>
                </div>
            </a>
         </li>`
        )
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += 
            `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventsItens = ""
        user.events.forEach(event => {
            if(event.type === 'PushEvent'){
            eventsItens += `<li><p>${event.repo.name} <span>- ${event.payload.commits[0].message}</pan></p>`
            }else if(event.type === 'CreateEvent'){
               eventsItens += `<li><p>${event.repo.name} <span>- Sem mensagem de commit</pan></p>`
            }
        })

            if(user.events.length > 0){
                this.userProfile.innerHTML += `
                <div class="events">
                    <h2>Eventos</h2>
                    <ul>${eventsItens}</ul>
                </div>`
            }
        

                          
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado!!!</h3>'
    }

   
}

export {screen}