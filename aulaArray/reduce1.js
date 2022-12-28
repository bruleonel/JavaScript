const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)
console.log('')

const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador)
    return acumulador + atual
})
console.log(resultado2)
console.log('')

const resultado3 = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    return acumulador + atual
})
console.log(resultado3)
console.log('')