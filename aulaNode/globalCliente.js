//O global deve ser importado, apenas uma vez.
require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Não faça isso' //os atributos podem ser alterados mas por se tratarem de algo global não é recomendado!
console.log(MinhaApp.nome)