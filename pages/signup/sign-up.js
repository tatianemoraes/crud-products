let btn = document.querySelector(".btn-sign-up");
btn.addEventListener('click', () => {

  let name = document.querySelector('.name').value; // aqui esta pegando o valor que foi digitado pelo usuario
  let email = document.querySelector('.email').value;
  let password = document.querySelector('.password').value;

  // colocamos if aqui, pq se nao tiver o checkbox checado nao cadastra
  if(!document.querySelector('#checkbox').checked){ // se nao for verdadeiro cai aqui
    document.querySelector('.loading').style.display = 'none'; // tirando o loading, pq usuario n aceitou termos
    alert('Required to accept Terms and Privacy Policy');
    return false;
  }

  let users = { // dados q digita na tela
    name: name, // esta salvando dentro do objeto o q foi digitado
    email: email,
    password: password
  };

  const UsersArray = [...Users] // foi criado um array, pois precisa pegar os antigos e incrementar os novos usuarios dentro do array
  const verifyUserExist = UsersArray.find((item) => item.email === users.email); // find é um loop que encontra o parametro que passar

  /*
  UMA FORMA MAIS COMPLETA DE SE FAZER A MESMA COISA ACIMA
  const verifyUserExist = UsersArray.find((item) => {
    if(item.email === users.email){
      return item;
    }
  });
  */

  if(verifyUserExist) {
    alert('Email já existente!'); // nao cadastra
    return false; // para aqui, return false serve para parar de executar todas as coisas
  }

  UsersArray.push(users) // colocando outro usuario no final

  localStorage.setItem('tableUsers', JSON.stringify(UsersArray)) // joga dentro do localStorage

  let main = document.querySelector('.loading'); // gif do loading
  main.style.display = "block"; // mostrar o gif

  setTimeout(function () { // em 3 segundos redireciona para o youtube, se for verdadeiro cai aqui
      window.location.href = "#" // pagina onde quero que direcione
  }, 3000);

});
