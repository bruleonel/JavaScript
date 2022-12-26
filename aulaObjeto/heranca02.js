//Cadeia de protótipos (prototype chain)

Object.prototype.atributo0 = '0' //só um exemplo, não faça!!
const avo = { atributo1: 'a'} //avo aponta para o prototype
const pai = { __proto__: avo, atributo2: 'b'}
const filho = { __proto__: pai, atributo3: 'c'}
console.log(filho.atributo1, filho.atributo0, filho.atributo2, filho.atributo3)

const carro = {
    velocidadeAtual: 0,
    velocidadeMaxima: 200,
    acelerarMais(delta) {
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velocidadeMaxima
        }
    },
    status() {
        return `${this.velocidadeAtual} km/h de ${this.velocidadeMaxima} Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() { // sobreescrevendo o método
        return `${this.modelo}: ${super.status()}` //super é usado para acessar a sobreposição e não o original
    }
}

Object.setPrototypeOf(ferrari, carro) //criando o prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())