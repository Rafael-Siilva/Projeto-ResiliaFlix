class ModelResiliaFlix {
    constructor() {
        this.titulo = "Titulo não encontrado"
        this.ano = "Sem ano"

    }

    buscarDados() {

        //nome filme procurado
        let t = "moana";
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

    atualizaDados(x) {
        this.titulo = x.Title
        this.ano = x.Year
    }

    //conteudo vindo da API
    getTitulo() {
        return this.titulo
    }

    get getAno() {
        return this.ano
    }
}





let p = new ModelResiliaFlix()
p.buscarDados()
console.log(p.getTitulo())