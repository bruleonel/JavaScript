//this é diferente de global porque ele aponta pra module.exports
console.log(this === global)
console.log(this === globalThis)
console.log(this === module)

//this é igual a module.exports/exports
console.log(this === module.exports)
console.log(this === exports)

//ATENÇÃO!!!
//this só é igual ao exports/module.exports fora das funções(normais) e dentro da arrow function, dentro das funções(normais) ele será igual à global:

function logThis() {
    console.log(`Dentro de uma função o this é igual ao exports? R: ${this === exports}`)
    console.log(`Dentro de uma função o this é igual ao module.exports? R: ${this === module.exports}`)
    console.log(`Dentro de uma função o this é igual ao global? R: ${this === global}`)
}
logThis()