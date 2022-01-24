//botando um objeto dentro de outro objeto

const cliente={
    nome : 'paulo',
    idade:36,
    cpf:'123234554323'
       
   }
   cliente.dependente = {
       nome:'maria',
       parentesco: 'filha',
       idade: 11,
       cpf:'75436476509',
       telefone: ['9945324409','9967853346']
   }
   //basta usar o nomeDoObjeto.nomeDoObjetoCriado ={}

   console.log(cliente);
   //acessando a array dentro do objeto dependente
   cliente.dependente.telefone.forEach(telefone => console.log(telefone));