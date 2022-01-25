//vamos incrementar mais funcionalidade ao objeto
//vamos bolar uma opção para o cliente depositar uma grana na conta
const cliente={
    nome : 'paulo',
    idade:36,
    cpf:'123234554323',
    telefones:['99877622', '99445566'],
    dependentes:[{  
        nome:'jandira almeida',
        parentesco: 'filha',
        idade: 9,
        dataNasc:'24/01/2013'
    } ],
    saldo: 100,
    depositar:function(valor){
        this.saldo +=valor; //this quer dizer esse saldo mesmo
    }
       
   }
   console.log(cliente.saldo);
   cliente.depositar(30);//acrescentando o valor no objeto. nota: qualquer coisa, revisar o codigo 4
   console.log(cliente.saldo);//mostrando o saldo com o novo valor
   
   
