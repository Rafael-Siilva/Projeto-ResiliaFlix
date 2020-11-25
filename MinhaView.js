class Visualiza {
    constructor() {}

    RecebeModelo(ModelFilmes) {
        let texto = document.createElement('article')
        texto.innerHTML = `<h1>${ModelFilmes.getTitulo()}</h1>
                            <p>${ModelFilmes.getAno()}</p>
                            <p>${ModelFilmes.getClassificacao()}</p>
                            <p>${ModelFilmes.getDuracao()}</p>
                            <p>${ModelFilmes.getGenero()}</p>
                            <p>${ModelFilmes.getDiretor()}</p>
                            <p>${ModelFilmes.getAtores()}</p>
                            <p>${ModelFilmes.getEnredo()}</p>
                            <p>${ModelFilmes.getPais()}</p>
                            <p>${ModelFilmes.getPremios()}</p>`
        document.body.appendChild(texto);


        let imagem = document.createElement('img')
        imagem.innerHTML = `<img src=${ModelFilmes.getPoster()}>`
        document.body.appendChild(imagem);

    }
}