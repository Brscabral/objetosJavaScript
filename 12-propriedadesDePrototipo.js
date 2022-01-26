//aqui vamos aprender duas  propriedade de JS: prototipo e instancia
    function cliente(nome,cpf,email,saldo){
    this.nome=nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
    this.depositar=function(valor){
         return this.saldo+=valor
    }
}
//agora vem a parte nova
//vamos usar o conceito de instanciamento para preencher os dados da função
 const andre = new cliente('andre','47563409401','andre@gmail.com', 100)
 //esse "new" serve exatamente para executar o conceito de instanciamento
 //é como se fosse uma nova função partida da função que a agente ja tem
 console.log(andre)