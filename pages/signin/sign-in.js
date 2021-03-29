let btn = document.querySelector(".btn-sign-in");
btn.addEventListener('click', () => {

  let email = document.querySelector('.email').value; // aqui esta pegando o valor que foi digitado pelo usuario
  let password = document.querySelector('.password').value;

  const UsersArray = [...Users] // aqui é o User que foi definido no global.js, do localStorage

  const verifyAuth = UsersArray.find((item) => item.email === email); // verificando email
  // o find entra no array, procura a informacao q vc valida, e retorna a primeira encontrada

  if(!verifyAuth) {
    alert('Favor preencher todos os campos!') // se estiver vazio e clicar em sign in, da esse alerta
    return;
  }

  if(!verifyAuth.email === email) { // se o email for verificado e nao existir, entao da o alerta de nao cadastrado
    alert('Email não cadastrado!');
    return; // retorna false para parar aqui, entende que é false, n precisa por
  }

  if(verifyAuth.email === email && verifyAuth.password !== password) { // se email for igual, mas senha diferente
    alert('Senha incorreta!'); // senha incorreta
    return;
  }

  if(verifyAuth.email === email && verifyAuth.password === password) { // se email igual e senha igual, entao loga
    let main = document.querySelector('.loading');
      main.style.display = "block" // block - visivel
       setTimeout(function() {
         window.location.href="/pages/admin/admin.html"
       }, 3000);
       // evento de callback q respeita o tempo colocado, quando chega naquele tempo respeita determinada acao
       // window.location.href
       // window - propriedade dom do html, tudo o q é do browser
       // location é atributo dentro do window e dentro dele vem todas as propriedades
       // href propriedade do location q serve para apontar para a URL que esta dentro e redirecionar em seguida
  }
});
