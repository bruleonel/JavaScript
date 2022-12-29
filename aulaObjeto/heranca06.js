function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

//simulando o new:
function novo(funcao, ...parametros) {
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, parametros)
    return obj
}

const aula3 = novo(Aula, 'Olá', 234)
const aula4 = novo(Aula, 'Hi', 432)
console.log(aula3, aula4)