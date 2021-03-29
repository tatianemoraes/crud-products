let products = [...Products]; // products = array dos produtos

let table = document.querySelector('.tbody-products'); // selecionando a tabela de produtos, do HTML

// para adc mais produtos na tabela
// cada product é um item do array products
// index é a posicao do objeto dentro do array

let render = products.map((product, index) => {
  return ` <tr>
      <td class="td-name_${index}">${product.name}</td>
      <td class="td-model_${index}">${product.model}</td>
      <td class="td-quantity_${index}">${product.quantity}</td>
      <td class="td-price_${index}">${product.price}</td>
      <td class="btns_${index}">
        <a class="a-link btnEdit_${index}" type="button" value="${index}" onclick="editSelected(${index})">
          <i class="fas fa-pen-square type-icon"></i>
        </a>
        <a class="a-link btnCancel_${index}" type="button" value="${index}" onclick="deleteSelected(${index})">
          <i class="fas fa-trash type-icon"></i>
        </a>
      </td>
    </tr>
    <br/>
  `
});

table.innerHTML = render.join(''); // tira a virgula da tabela
