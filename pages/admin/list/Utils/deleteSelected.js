function deleteSelected(position) { // atraves do onclick pego a posicao (index)
  products.splice(position, 1); // exclui o item clicado, pela posicao do array
  localStorage.setItem("tableProducts", JSON.stringify(products)); // atualiza localStorage
  table.deleteRow(position); // remove a linha selecionada da tela tbm
}
