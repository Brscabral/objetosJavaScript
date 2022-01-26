//vamos adicionar a funcionalidade poupança para o cliente
//e usaremos outro método tbm
function cliente(nome,cpf,email,saldo){
    this.nome=nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.depositar=function(valor){
         return this.saldo+=valor
    }
    }   
    function clientePoupanca(nome,cpf,email,saldo, saldoPoup){
        cliente.call(this,nome,cpf,email,saldo)//o método .call chama a função cliente
        this.saldoPoup=saldoPoup
        
    }
    const ju = new clientePoupanca('juliana', '11122233344455', 'juliana@gmail.com', 100,200)
    console.log(ju)
    //agora vamos usar o . prototype para acrecentar a função depositar
    clientePoupanca.prototype.depositarPoup = function(valor){

        this.saldoPoup+=valor
    }
    ju.depositarPoup(30)
    console.log(ju.saldoPoup)