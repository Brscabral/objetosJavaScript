//vamos acessar as listas de um objeto 
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
    } ]
       
   }
   cliente.dependentes.push({
       nome:'airton claudio',
       idade:2,
       parentesco: 'filho',
       dataNasc:'24/01/2020'
   })
  // console.log(cliente)
   //transformei o objeto .deoendentes, que está dentro do objeto, clientes em uma array
   //dai mandei outro objeto dentro da array criada para depdentes.
   const filhoMaisNovo= cliente.dependentes.filter(dependentes => 
    dependentes.dataNasc ==='24/01/2020')
    console.log(filhoMaisNovo)
    //explicando a logica:
    //o objetivo nesse ultimo trecho do codigo é mostrar o filho mais novo
    //acessei o objeto clientes, depois acessei os dependentes e usei o método "filter"
    //lembrando que o método filter tem como parametro uma função e ele filtra as arrays
    //dentro do .filter, criei a arrow function que retorna a comparação da dataNasc com a data menor
    