function getStorage() {
  let products = [];

  if(localStorage.getItem("tableProducts")) {
    products = JSON.parse(localStorage.getItem("tableProducts"));
    return products;
  } else {
    return [];
  }
}

Products = getStorage();

// render, codigo q renderiza antes do codigo
// executada apos HTML, CSS, mas antes de todos os outros arquivos JS
