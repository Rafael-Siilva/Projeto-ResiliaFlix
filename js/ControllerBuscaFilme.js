class ControllerBuscaFilme {

    adiciona() {
        var nomePesquisa = document.getElementById('filme')
        let model = new ModelResiliaFlix()
        model.buscarDados(nomePesquisa.value)

        let visualiza = new ViewBuscaFilme()
        visualiza.pequisaFilme(model)
    }

}