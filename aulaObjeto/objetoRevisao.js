//Objeto é coleção dinâmica de pares chaves/valor

const produto = new Object
//Pode-se usar de duas formas
produto.nome = 'Cadeira'
//ou
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

//Criando um objeto mai complexo:
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {

    }
}

//Há duas formas de acessar o atributo, pelo . ou []
carro.proprietario.endereco.numero = 1000
//ou
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)
console.log('')
console.log('DELETANDO:')
//Quando deletar o atributo, tudo que estará baixo será excluído
delete carro.condutores
delete carro.proprietario.endereco
delete carro. calcularValorSeguro

console.log(carro)