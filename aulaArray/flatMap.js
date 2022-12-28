//Map com concat

const escola = [{
    nome: 'Turma1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Clara',
        nota: 9.2
    }]
}, {
    nome: 'Turma2',
    alunos: [{
        nome: 'Marcelo',
        nota: 6.1
    }, {
        nome: 'Fernanda',
        nota: 8.2
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)