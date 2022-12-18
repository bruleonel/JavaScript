const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

//Acessando as chaves:
console.log(Object.keys(pessoa))
//Acessando os valores:
console.log(Object.values(pessoa))
//Acessando todos os valores e chaves em forma de array:
console.log(Object.entries(pessoa))

//Esse array pode ser percorrido pelo forEach
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Outro exemplo pra ficar mais claro usando o destruct []:
Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

//Para definir uma propriedade de um objeto:
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Será listada?
    writable: false, //Permite ser modificada?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/02/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign {ECMAScript 2015}
const destino = { a : 1 }
const objeto1 = { b: 2 }
const objeto2 = { c: 3, a: 4}
const objeto = Object.assign(destino, objeto1, objeto2)

//Para cogelar os atriutos
Object.freeze(objeto)

console.log(objeto)