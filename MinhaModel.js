class ModelFilmes {
    constructor(title) {

        this._imagem = "";
        this._titulo = title;
        this._ano = "";
        this._classificacao = "";
        this._duracao = "";
        this._genero = "";
        this._diretor = "";
        this._atores = "";
        this._enredo = "";
        this._idioma = "";
        this._país = "";
        this._premios = "";
    }

    buscarInformacoes() {
        let Filme = this._titulo;
        let requestFilme = new XMLHttpRequest();

        requestFilme.addEventListener('load', () => {
            if (requestFilme.status == 200) {
                let guardaDados = this.processaDados(requestFilme.responseText)
                this.atualizaDados(guardaDados)

            }
        })

        requestFilme.open("GET", `http://www.omdbapi.com/?t=${Filme}&apikey=b0f05d47&`, false);

        requestFilme.send();

    }

    processaDados(x) {
        let response = JSON.parse(x);
        return response;

    }

    atualizaDados(dados) {

        this._imagem = dados.Poster;
        this._titulo = dados.Title;
        this._ano = dados.Year;
        this._classificacao = dados.Rated;
        this._duracao = dados.Runtime;
        this._genero = dados.Genre;
        this._diretor = dados.Director;
        this._atores = dados.Actors;
        this._enredo = dados.Plot;
        this._idioma = dados.Language;
        this._país = dados.Country;
        this._premios = dados.Awards;
    }

    //conteudo vindo da API

    getPoster() {
        return this._imagem
    }

    getTitulo() {
        return this._titulo
    }

    getAno() {
        return this._ano
    }

    getClassificacao() {
        return this._classificacao
    }

    getDuracao() {
        return this._duracao
    }

    getGenero() {
        return this._genero
    }

    getDiretor() {
        return this._diretor
    }

    getAtores() {
        return this._atores
    }

    getEnredo() {
        return this._enredo
    }

    getPais() {
        return this._país
    }

    getPremios() {
        return this._premios
    }

}