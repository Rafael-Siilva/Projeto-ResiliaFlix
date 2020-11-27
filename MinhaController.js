class Controla {
    constructor() {}

    NovoFilme(Filme) {
        console.log('tô aqui')
        console.log(Filme)
        let artigo = document.getElementById('a')
        artigo.innerHTML = `<p class="color"> ${Filme}</p>`
            // let Model = new ModelFilmes();
            // Model.buscarInformacoes(artigo.value);

        // let visual = new Visualiza();
        // visual.RecebeModelo(Model);

    }
}