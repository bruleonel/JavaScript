/* Crie uma função que recebe um array de números e retorna 
o segundo maior número presente nesse array */

const numeros = [1, 23, 65, 3, 99, 66, 65, 84]

function segundoMaior (n) {
    const ordenados = n.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundo = ordenados[1]
    return segundo
}

console.log(segundoMaior(numeros))