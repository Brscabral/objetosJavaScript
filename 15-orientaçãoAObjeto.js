// primeiros passos em orientação a objetos
//trabalharemos com classes, métodos e heranças
class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome=nome
        this.email=email
        this.cpf=cpf
        this.saldo=saldo

    }
    depositar(valor){
        this.saldo+=valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }

}



const andre= new Cliente("andre", "andre@gmail.com", "11122233344465",100)
console.log(andre)