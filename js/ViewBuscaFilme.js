class ViewBuscaFilme {
    pequisaFilme(result) {
        let img = document.getElementById('ano')
        let titulo = document.getElementById('titulo')
        let ano = document.getElementById('ano')
        titulo.textContent = `${result.getTitulo()}`
        img.innerHTML = `<img src="${result.getPoster()}" alt="" class="imagem-pesquisa">`


    }

}



// let texto = document.createElement('article')
// texto.innerHTML = `<h1>${ModelFilmes.getTitulo()}</h1>
//                     <p>${ModelFilmes.getAno()}</p>
//                     <p>${ModelFilmes.getClassificacao()}</p>
//                     <p>${ModelFilmes.getDuracao()}</p>
//                     <p>${ModelFilmes.getGenero()}</p>
//                     <p>${ModelFilmes.getDiretor()}</p>
//                     <p>${ModelFilmes.getAtores()}</p>
//                     <p>${ModelFilmes.getEnredo()}</p>
//                     <p>${ModelFilmes.getPais()}</p>
//                     <p>${ModelFilmes.getPremios()}</p>`
// document.body.appendChild(texto);