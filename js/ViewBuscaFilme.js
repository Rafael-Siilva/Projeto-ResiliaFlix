class ViewBuscaFilme {
    pequisaFilme(result) {
<<<<<<< HEAD

        let titulo = document.getElementById('titulo')
        let ano = document.getElementById('ano')

        titulo.textContent = `Titulo: ${result.getTitulo()}`
        ano.textContent = `Ano: ${result.getAno}`
    }

}
=======
        let img = document.getElementById('imagem')
        let titulo = document.getElementById('titulo')
        let ano = document.getElementById('ano')
        titulo.textContent = `Titulo: ${result.getTitulo()}`
        img.innerHTML = `<img src="" alt="">`
        ano.textContent = `Ano: ${result.getAno()} ${result.getClassificacao()}  ${result.getDuracao()}`

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
>>>>>>> 33c54b56b0c424e6f917b9d9cac995fb6b122969
