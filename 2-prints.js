//acessando o objeto

const cpf=['123234554323','33456743287', '47634528693'];
const nomes=['paulo','josé','antonio'];

const cliente={
 nome : 'paulo',
 idade:36,
 cpf:'123234554323'
    
}
//console.log(cliente.nome); aqui irá aparecer "paulo"
//usando tamplate string
console.log(`seu nome é: ${cliente.nome}, sua idade é: ${cliente.idade}, seu cpf é: ${cliente.cpf.substring(0,3)}`);
//perceba que eu acessei o objeto "cliente" e depois o que eu queria especificamente dentro dele.
