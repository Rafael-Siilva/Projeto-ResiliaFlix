class Controla {
    constructor() {}

    NovoFilme() {
        console.log('tô aqui')
        let artigo = document.querySelector('article')
        let Model = new ModelFilmes();
        Model.buscarInformacoes();

        let visual = new Visualiza();
        visual.RecebeModelo(Model);

    }
}
let controll = new Controla()
controll.NovoFilme();