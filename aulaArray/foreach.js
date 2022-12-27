const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
console.log(aprovados)
console.log('')

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
console.log('')

aprovados.forEach(nome => console.log(nome))
console.log('')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)