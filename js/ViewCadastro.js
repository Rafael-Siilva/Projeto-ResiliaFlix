class ViewCadastro {
    pequisaCep(result) {

        let titulo = document.getElementById('cep')
        
        titulo.textContent = `Titulo: ${result.getCep()}`
    
    }

}