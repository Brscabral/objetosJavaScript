//vamos acessar todos os dados com colchetes
const cliente={
    nome : 'paulo',
    idade:36,
    cpf:'123234554323'
       
   }
   const chaves=["nome", "idade", "cpf"];
   chaves.forEach(info => console.log(cliente[info]));
   //usamos o método forEach para acessar todos os daods do objeto
   //lembrando que o forEach requer como parametro uma função
   