class ModelCadastro {
    constructor(){
        this.cep
        this.logradouro 

    }

    processaCep(cep){

        cep = '01001000';
        this.logradouro = 'Rio de Janeiro'
        let recebe =  `http://viacep.com.br/ws/${cep}/json/`
        let requestCep = new XMLHttpRequest();


        requestCep.addEventListener('load', ()=>{
            if(requestCep.status == 200){
                let guardaInfo = this.processaResponseCep(requestCep.responseText);
                this.atualizaDadosCep(guardaInfo);
            }
        })
        requestCep.open('GET', recebe, false);
        requestCep.send();   
    }

    processaResponseCep(response){
        let guardaResponse = JSON.parse(response);
        return guardaResponse;

    }

    atualizaDadosCep(dadosCep){
        this.cep = dadosCep.cep
    }

    atualizaDadosLogradouro(dadosLogradouro){
        this.logradouro = dadosLogradouro.logradouro
    }

    getLogradouro(){
        return this.logradouro;
    }

    getCep(){
        return this.cep;
    }
} 
let cadastro = new ModelCadastro();
console.log(cadastro.processaCep());
console.log(cadastro.getCep());
console.log(cadastro.getLogradouro());