class ViewBuscaFilme {
    constructor() {
        this.mostra = document.getElementById('navbarToggleExternalContent')
    }
    pequisaFilme(result) {

        //cria tag da div dos filmes
        this.mostra.innerHTML = `<div class=" p-1">
        <h5 class="letter-color" id="titulo"></h5>
        <span class="letter-color" id="ano"></span>
    </div>`

        //pegando elemento da API e mostrando na tag criada
        let img = document.getElementById('ano')
        let titulo = document.getElementById('titulo')
        let ano = document.getElementById('ano')
        titulo.textContent = `${result.getTitulo()}`
        img.innerHTML = `<img src="${result.getPoster()}" alt="" class="imagem-pesquisa">`


    }

}