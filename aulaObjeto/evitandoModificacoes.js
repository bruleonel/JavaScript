//Object.preventExtensions (Não permite a extensão/aumento de atributos do objeto)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal (Não permite adicionar/excluir atributos, só modificar)
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
