Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
console.log(aprovados)
console.log('')

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
console.log('')