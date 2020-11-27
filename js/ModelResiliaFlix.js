class ModelResiliaFlix {
    constructor() {
        this._imagem = "";
<<<<<<< HEAD
        this._titulo = "Titulo não encontrado"
        this._ano = "Sem ano"
=======
        this._titulo = "";
        this._ano = "";
>>>>>>> 33c54b56b0c424e6f917b9d9cac995fb6b122969
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

    buscarDados(t) {

        //nome filme procurado

        let apiKey = "79c661bb";

        let url = `http://www.omdbapi.com/`
        let request = new XMLHttpRequest();

        request.addEventListener('load', () => {
            if (request.status == 200) {
                let guardaDados = this.processaDados(request.responseText)
                this.atualizaDados(guardaDados)

            }
        })

        request.open('GET', `${url}?t=${t}&apikey=${apiKey}`, false)
        request.send();

    }

    processaDados(x) {
        let response = JSON.parse(x);
        return response;

    }

<<<<<<< HEAD
    atualizaDados(x) {

        this._imagem = x.Poster;
        this._titulo = x.Title
        this._ano = x.Year
        this._classificacao = x.Rated;
        this._duracao = x.Runtime;
        this._genero = x.Genre;
        this._diretor = x.Director;
        this._atores = x.Actors;
        this._enredo = x.Plot;
        this._idioma = x.Language;
        this._país = x.Country;
        this._premios = x.Awards;
=======
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
>>>>>>> 33c54b56b0c424e6f917b9d9cac995fb6b122969
    }

    //conteudo vindo da API
    getPoster() {
        return this._imagem
    }

    getTitulo() {
        return this._titulo
<<<<<<< HEAD
    }

    get getAno() {
        return this._ano
    }
    getPoster() {
        return this._imagem
    }
    getClassificacao() {
        return this._classificacao
    }
=======
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
>>>>>>> 33c54b56b0c424e6f917b9d9cac995fb6b122969

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