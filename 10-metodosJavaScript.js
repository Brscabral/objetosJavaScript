//o programa vai ler se o cliente tem dependente
//se tiver, ele vai imprimir uma mensagem de seguro

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
       return this.saldo +=valor; //this quer dizer esse saldo mesmo
    }
       
   }
   function ofereceSeguro(obj){//obj é um objeto qualquer
       const propsClientes = Object.keys(obj)// o método .keys vai retornas as chaves do cliente(nome,idade,cpf...)
        if(propsClientes.includes('dependentes')){//includes vai ver se dependentes está dentro do objeto
          console.log(`oferta de seguro de vida para ${obj.nome}`)//aqui ele vai acessar o nome dentro do objeto
        }
   }
   console.log(ofereceSeguro(cliente))//cliente é o objeto solicitado pelo usuario
   //outros métodos:
   //se o object.keys pega as chaves existe tbm o object.values(), que pega os valores das chaves
   console.log(Object.values(cliente))//paulo,36, e etc..
   //object.entries() o conjuto de arrays(semelhante com o que vimos no puxando relatorio)
   console.log(Object.entries(cliente))