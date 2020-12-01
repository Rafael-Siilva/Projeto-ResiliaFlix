class ViewBuscaFilme {
    pequisaFilme(result) {
        let img = document.getElementById('ano')
        let titulo = document.getElementById('titulo')
        let ano = document.getElementById('ano')
        titulo.textContent = `${result.getTitulo()}`
        img.innerHTML = `<img src="${result.getPoster()}" alt="" class="imagem-pesquisa">`


    }

}