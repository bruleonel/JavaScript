/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais. */

const frase = 'Meu nome é Bruna'

function filtrarLetras (string) {
    return string.replace(/[aeiou]/ig, '')
}

console.log(filtrarLetras(frase))