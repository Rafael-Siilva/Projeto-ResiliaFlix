class ControllerImagem {
    constructor() {}

    NovoFilme(p) {
        console.log(p)
        console.log('tô aqui')
        let a = document.getElementById('pi')
        a.innerHTML = `<p class="text-primary"> ${p}</p>`


    }
}