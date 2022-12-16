function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

//Exemplo do retorno de toString retornando a própria função.

function sum(a, b) {
    return a + b;
  }
  
  console.log(sum.toString(2, 3));

//O método replace substitui uma string pela outra