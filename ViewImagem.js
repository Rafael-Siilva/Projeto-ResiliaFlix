class ViewImagem {
    constructor() {}

    RecebeModelo(ModelFilmes) {
        let a = document.getElementById('p')
        a.innerHTML = `<p class="color"></p>`

        // let imagem = document.createElement('img')
        console.log("pode me ver?")
            // imagem.innerHTML = `<img src=${ModelFilmes.getPoster()}>`
            // document.body.appendChild(imagem);

        let texto = document.createElement('article')
        texto.innerHTML = `<img src=${ModelFilmes.getPoster()}>
                            <h1>${ModelFilmes.getTitulo()}</h1>
                            <p text-danger>Ano: ${ModelFilmes.getAno()}</p>
                            <p text-danger>Classificação: ${ModelFilmes.getClassificacao()}</p>
                            <p>Duração: ${ModelFilmes.getDuracao()}</p>
                            <p>Gênero: ${ModelFilmes.getGenero()}</p>
                            <p>Diretor: ${ModelFilmes.getDiretor()}</p>
                            <p>Atores: ${ModelFilmes.getAtores()}</p>
                            <p>Enredo: ${ModelFilmes.getEnredo()}</p>
                            <p>País: ${ModelFilmes.getPais()}</p>
                            <p>Premios: ${ModelFilmes.getPremios()}</p>
                            
                            <button type="button" class="btn btn-secondary btn-lg text-align-center bg-dark"><svg width="2em" height="1.5em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
          </svg>  Assista agora</button>
        <button type="button" class="btn btn-secondary btn-lg text-align-center bg-dark"><svg width="2em" height="1.5em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
              </svg>  Baixar</button>
        <button type="button" class="btn btn-secondary btn-lg text-align-center bg-dark"><svg width="2em" height="1.5em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg> Minha Lista</button>`

        a.appendChild(texto);


    }
}