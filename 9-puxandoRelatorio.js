//puxando relatorio de clientes
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
    }  ,
    { 
        nome:'airton almeida',
        parentesco: 'filho',
        idade: 2,
        dataNasc: '24/01/2020'
      }],
    saldo: 100,
    depositar:function(valor){
       return this.saldo +=valor; //this quer dizer esse saldo mesmo
    }
       
   }
   
   let relatorio=" "
   for(let info in cliente){ //esse in quer dizer dentro(info dentro de cliente)
       if(typeof cliente[info]==='object' || typeof cliente[info]==='function'){//o cliente[info] vai mostrar os dados que estão com as informaçoes do objeto
           continue //simplesmente continuar 
       }else{
           relatorio+= `
            ${info} ==> ${cliente[info]}
            `
       }
   }
   console.log(relatorio)