/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
 */

const numeros = [123, 0987, 23, 456, 765, 34, 902, 54, 2000, 4, 30, 1, 3789, 56784, 729, 7, 74,]

function filtrarNumerosPorDigitos (array, numeroDeDigitos) {
    return array.filter( numero => {
        const digitos = String(numero).length //Para ler a quantidade de dígitos

        return digitos === numeroDeDigitos
    })
}

console.log(filtrarNumerosPorDigitos(numeros, 1
))