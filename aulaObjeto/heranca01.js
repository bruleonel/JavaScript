const ferrari = {
    modelo: 'F40',
    valMax: 324
}

const volvo = {
    modelo: 'V40',
    valMax: 200
}

//Para acessar o prototipo do objeto:
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log('')

console.log(volvo.__proto__)
console.log(volvo.__proto__ === Object.prototype)
console.log('')

console.log(Object.prototype.__proto__ === null)
console.log('')

//Somente funções podem acessar diretamentamente o prototype sem __proto__
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
console.log(MeuObjeto.prototype)
console.log(MeuObjeto.__proto__)
