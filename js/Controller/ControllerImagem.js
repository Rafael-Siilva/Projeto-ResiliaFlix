class ControllerImagem {
    constructor() {}

    NovoFilme(p) {
        console.log(p)
        console.log('tô aqui')

        let Model = new ModelResiliaFlix();
        Model.buscarDados(p);

        let visual = new ViewImagem();
        visual.RecebeModelo(Model);
    }
}