//Usando a notação literal:
const obj1 = {}
console.log(obj1)

//Object em JS:
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcoes construtoras:
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

/*Da forma como foi contruido o objeto, só é possível modificar
o nome do produto após o instanciamento*/
const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//Função Factory:
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que recebe uma objeto:
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)