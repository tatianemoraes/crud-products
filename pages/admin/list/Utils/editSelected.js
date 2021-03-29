function editSelected(index) {

  let btns = document.querySelector(`.btns_${index}`)

  btns.innerHTML = `
  <a class="a-link btnEdit_${index}" type="button" value="${index}" onclick="confirmSelected(${index})">
    <i class="fas fa-check-square"></i>
  </a>

  <a class="a-link btnCancel_${index}" value="${index}" onclick="cancelSelected(${index})">
    <i class="fas fa-window-close"></i>
  </a> `

  let products = JSON.parse(localStorage.getItem("tableProducts"));

  let name = document.querySelector(`.td-name_${index}`)
  let model = document.querySelector(`.td-model_${index}`)
  let quantity = document.querySelector(`.td-quantity_${index}`)
  let price = document.querySelector(`.td-price_${index}`)

  name.innerHTML = `<input class="input-name_${index}" value="${products[index].name}">`
  model.innerHTML = `<input class="input-model_${index}" value="${products[index].model}">`
  quantity.innerHTML = `<input class="input-quantity_${index}" value="${products[index].quantity}">`
  price.innerHTML = `<input class="input-price_${index}" value="${products[index].price}">`

}

function btnsRollback(index) {
  return `
  <a class="a-link btnEdit_${index}" type="button" value="${index}" onclick="editSelected(${index})">
    <i class="fas fa-pen-square type-icon"></i>
  </a>
  <a class="a-link btnCancel_${index}" type="button" value="${index}" onclick="deleteSelected(${index})">
    <i class="fas fa-trash type-icon"></i>
  </a>
`
}

function confirmSelected(index) {
  let products = JSON.parse(localStorage.getItem("tableProducts"));
  let name = document.querySelector(`.input-name_${index}`);
  let model = document.querySelector(`.input-model_${index}`);
  let quantity = document.querySelector(`.input-quantity_${index}`);
  let price = document.querySelector(`.input-price_${index}`);

  let product = {
    name: name.value,
    model: model.value,
    quantity: quantity.value,
    price: price.value,
  }

  let verifyProductEquals = products.find((product)=>product.name === name && product.model === model);

  if(verifyProductEquals){
    alert("Product already been exist!");
    return;
  }

  if(name.value === "" && quantity.value === "" && price.value === "") {
    alert("Need to write all the fields!")
    return;

  } else if(name.value === "" && quantity.value !== "" && price.value !== "") {
    alert("Need to put Name!")
    return;

  } else if(name.value === "" && quantity.value === "" && price.value !== "") {
    alert("Need to put Name and Quantity!")
    return;

  } else if(name.value === "" && quantity.value !== "" && price.value === "") {
    alert("Need to put Name and Price!")
    return;

  } else if(quantity.value === "" && name.value !== "" && price.value !== "") {
    alert("Need to put Quantity!")
    return;

   } else if(quantity.value === "" && name.value !== "" && price.value === "") {
    alert("Need to put Quantity and Price!")
    return;

  } else if(price.value === "" && name.value !== "" && quantity.value !== "") {
    alert("Need to put Price!")
    return;

  } else if(name.value !== "" && quantity.value === "" && price.value === "") {
    alert("Need to put Quantity and Price!")
    return;
  }

  products[index] = product;
  localStorage.setItem("tableProducts", JSON.stringify(products));

  name.outerHTML = `<td class="td-name_${index}">${product.name}</td>`
  model.outerHTML = `<td class="td-model_${index}">${product.model}</td>`
  quantity.outerHTML = `<td class="td-quantity_${index}">${product.quantity}</td>`
  price.outerHTML = `<td class="td-price_${index}">${product.price}</td>`

  let btnDefault = document.querySelector(`.btns_${index}`)
  btnDefault.innerHTML = btnsRollback(index);

}

function cancelSelected(index) {
  let products = JSON.parse(localStorage.getItem("tableProducts"));

  let {
    name: nameProduct, // nameProduct é para referenciar name, senao da conflito
    model: modelProduct,
    quantity: quantityProduct,
    price: priceProduct
  } = products[index]

  let name = document.querySelector(`.input-name_${index}`);
  let model = document.querySelector(`.input-model_${index}`);
  let quantity = document.querySelector(`.input-quantity_${index}`);
  let price = document.querySelector(`.input-price_${index}`);

  name.outerHTML = `<td class="td-name_${index}">${nameProduct}</td>`
  model.outerHTML = `<td class="td-model_${index}">${modelProduct}</td>`
  quantity.outerHTML = `<td class="td-quantity_${index}">${quantityProduct}</td>`
  price.outerHTML = `<td class="td-price_${index}">${priceProduct}</td>`

  let btnDefault = document.querySelector(`.btns_${index}`)
  btnDefault.innerHTML = btnsRollback(index);
}
