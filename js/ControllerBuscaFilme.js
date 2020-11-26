class ControllerBuscaFilme {

    adiciona() {

        console.log("di")

        let nomePesquisa = document.getElementById('nome')
        let model = new ModelResiliaFlix()
        model.buscarDados(nomePesquisa.value)

        let visualiza = new ViewBuscaFilme()
        visualiza.pequisaFilme(model)
    }

}