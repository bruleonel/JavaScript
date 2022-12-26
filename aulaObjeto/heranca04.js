const lapis = {}
console.log(lapis.prototype)

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
//pra saber se apontam para o mesmo objeto
console.log(obj1.__proto__ === obj2.__proto__)
//pra saber se o prototipo aponta para o mesmo 
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Antonio'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'OBJ3'
obj3.falar()