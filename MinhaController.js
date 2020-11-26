class Controla {
    constructor() {}

    NovoFilme() {
        console.log('tô aqui')
        let artigo = document.getElementById('artigo')
        let Model = new ModelFilmes();
        Model.buscarInformacoes(artigo.value);

        let visual = new Visualiza();
        visual.RecebeModelo(Model);

    }
}