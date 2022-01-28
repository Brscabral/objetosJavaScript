//vamos ultilizar a tecnica de espalhamento do javaScript
const cliente = [{
    nome:'paulo',
    idade:36,
    cpf:'123234554323',
    telefones:['99877622', '99445566'],
    dependentes:[{
        nome:'jandira almeida',
        idade:9,
        parentesco:'filha',
        dataNasc:'24/01/2013'
    },
      {  
        nome:'airton almeida', 
        idade:2,
        parentesco:'filho',
        dataNasc:'24/01/2020'
      } ]
},

 {
nome: 'juliana',
idade: 46,
cpf:'43558697074',
telefone: '99345799',

    dependentes:[{ 
    nome:'maria eduarda',
    idade: 14,
    parentesco: 'filha',
    dataNasc:'25/01/2008'
} ]
}
]
const listaDependente=[...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependente)

