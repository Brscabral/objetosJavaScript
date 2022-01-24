const cliente={
    nome : 'paulo',
    idade:36,
    cpf:'123234554323',
    telefones:['993465976', '994322678']
   }
   //vamos acessar essa array chamada telefones
   cliente.telefones.forEach(telefones => console.log(telefones))
   //usamos o forEach mais uma vez para acessar as arrays sem modifica-las
