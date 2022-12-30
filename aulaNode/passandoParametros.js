//Como passar parametros para um módulo:
//Se o módulo retorna uma função você pode invocá-la passando parametros:

module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}