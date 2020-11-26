class ViewBuscaFilme {
    pequisaFilme(result) {

        let titulo = document.getElementById('titulo')
        let ano = document.getElementById('ano')

        titulo.textContent = `Titulo: ${result.getTitulo()}`
        ano.textContent = `Ano: ${result.getAno}`
    }

}