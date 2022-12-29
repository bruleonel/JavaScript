//Map serve para mapear elementos de um array e transformar em outro array do mesmo tamanho com elementos diferentes
const nums = [1, 2, 3, 4, 5]

let soma = nums.map(function(e) {
    return e + 2
})

const multiplicacao = nums.map(e => e * 2)

console.log(soma)
console.log(multiplicacao)

//Pode ser usado de forma acumulada também
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

let resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)