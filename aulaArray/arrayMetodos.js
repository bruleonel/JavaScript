const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o último
console.log(pilotos)

pilotos.push('Verstapen') //adiciona no fim da fila
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona no inicio da fila
console.log(pilotos)

//Splice serve para adicionar e remover apartir de certa posição
//Adicionando no índice 2 removendo 0 elelmntos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Removendo do íncice 3 em diante 1 elemento
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //esse método cria outro array copiando as informaçoes apartir do índice indicado
console.log(algunsPilotos)

const outrosPilotos = pilotos.slice(1, 4)
console.log(outrosPilotos)