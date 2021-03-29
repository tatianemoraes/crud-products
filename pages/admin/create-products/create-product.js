let fieldQuantity = document.querySelector('#input-quantity');

// para setar o valor 1 e nao colocar valores < 0
// Listen for input event on numInput.
fieldQuantity.addEventListener('input', function(){
    // Let's match only digits.
    var num = this.value.match(/^\d+$/); // (/^\d+$/) - expression regular
    if (num === null) {
        // If we have no match, value will be empty.
        this.value = "";
    }
}, false)
//pegar o input e passar para ele o evento que cada clique vc da ele ja executa  o listener e com isso ele valida na hora o digitado
//se for 0 ele substitui por 1 e se for < 0 que zero tbm e quando for isso você joga 1


let btnSave = document.querySelector('.btn-save');
btnSave.addEventListener('click', (e) => {

  e.preventDefault();

  let name = document.querySelector('#input-name');
  let model = document.querySelector('#input-model');
  let quantity = document.querySelector('#input-quantity');
  let price = document.querySelector('#input-price');

  let productsObject = {
    name: name.value,
    model: model.value,
    quantity: quantity.value,
    price: price.value,

    // price: price
    // redundancia, se for receber o parametro (da esquerda), vc deve mudar o nome p fzr sentido
  }

  let products = [...Products];

  let verifyProductEquals = products.find((product)=>product.name === name && product.model === model);


  if(verifyProductEquals){
    alert("Product already been exist!");
    return;
  }

  if(name === "" && quantity === "" && price === "") {
    alert("Need to write all the fields!")
    return;

  } else if(name === "" && quantity !== "" && price !== "") {
    alert("Need to put Name!")
    return;

  } else if(name === "" && quantity === "" && price !== "") {
    alert("Need to put Name and Quantity!")
    return;

  } else if(name === "" && quantity !== "" && price === "") {
    alert("Need to put Name and Price!")
    return;

  } else if(quantity === "" && name !== "" && price !== "") {
    alert("Need to put Quantity!")
    return;

   } else if(quantity === "" && name !== "" && price === "") {
    alert("Need to put Quantity and Price!")
    return;

  } else if(price === "" && name !== "" && quantity !== "") {
    alert("Need to put Price!")
    return;

  } else if(name !== "" && quantity === "" && price === "") {
    alert("Need to put Quantity and Price!")
    return;
  }

  products.push(productsObject); // o push é para adc mais dados, conjunto de objetos dentro de um array
  // variavel global n recebe push, entao tem que criar um novo array q receba products e dentro dele vai receber products da global, e com isso vou conseguir agr incrementar todos os novos objetos q eu cadastrar

  localStorage.setItem("tableProducts", JSON.stringify(products));
  // setar item dentro do local storage
  // primeiro colocar alvo, onde sera salvo, normalmente tabela criada no global
  // e segundo, colocar quais serao os dados passados

  alert("The product has been registered!");

  productsObject = {};
  name.value = '';
  model.value = '';
  quantity.value = '';
  price.value = '';

});
