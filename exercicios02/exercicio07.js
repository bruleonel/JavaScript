/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a
seguir: */

inverter = { a: 1, b: 2, c: 3, d: 4, e: 5}

function inverterValores (obj){
    const valoresInvertidos = Object.entries(obj).map( parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(valoresInvertidos)
}

console.log(inverterValores(inverter))

    