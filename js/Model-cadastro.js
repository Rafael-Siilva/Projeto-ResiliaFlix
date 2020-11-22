class ModelCadastro {
    constructor(){
        this.cep 

    }

    processaCep(cep){
        cep = '01001000';
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

    getCep(){
        return this.cep;
    }
} 
let cadastro = new ModelCadastro();
console.log(cadastro.processaCep());
console.log(cadastro.getCep());