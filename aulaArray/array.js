console.log(typeof Array, typeof new Array, typeof [])

//Formas de criação:
//1-
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) 

//Retribuindo valores (Recomendado)
aprovados = ['Bia', 'Bruna', 'Julia']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // sort altera o array
console.log(aprovados)

//Mesmo após deletar os indices continuarão na mesma posição
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //apartir do índice 1 excluindo 1 elemento 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Julia', 'Beatriz') //apartir do índice 1 excluindo 1 elemento e adicionando outros 
console.log(aprovados)