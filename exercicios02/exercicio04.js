/* Elabore uma função que recebe um objeto com estudantes
e suas notas. As notas de cada estudante estarão num array, 
conforme exemplo abaixo. Você deverá calcular a média da 
nota de cada aluno e retornar um objeto com os atributos 
nome e media, que indica o aluno que teve o melhor 
desempenho nas notas. 

let estudantes = ({
    Joao: [8, 10, 8.9, 10], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) 

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function recerberMelhorEstudante(estudantes) {
    console.log(estudantes)
    console.log('')
    console.log(Object.entries(estudantes)) //transformou tudo em uma posição no array
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
        valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
console.log(estudantesOrdenados)
const melhorEstudante = estudantesOrdenados[0]
return melhorEstudante
}
console.log(recerberMelhorEstudante(estudantes))
//console.log(melhorEstudante) */

const estudantes = ({
    Daiane: [8.1, 6.3, 7.9, 9.8],
    Eduardo: [5.1, 8.3, 9.9, 10],
    Mariana: [6.6, 7.1, 7, 6.5],
    Leandro: [10, 5.5, 8.2, 8.1],
    Roberta: [4.3, 10, 8.3, 8.1],
    Lucas: [7.3, 6.3, 8.3, 9.9],
    Nathalia: [6.6, 7.2, 6.9, 9.4],
    Rodrigo: [9.3, 8.5, 8.6, 7.2],
    Leticia: [7.7, 8.9, 6.7, 5.9]
})

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length

function vefificarMelhorEstudante (estudantes) {
    const mediaEstudandes = Object.entries(estudantes).map(estudante => {
        const chave = 0,
        valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = mediaEstudandes.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante 
}
console.log(vefificarMelhorEstudante(estudantes))