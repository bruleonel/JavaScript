//Implementando como é o funcionamento do filter
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notbook', preço: 2499, fragil: true },
    { nome: 'iPad Pro', preço: 4199, fragil: true },
    { nome: 'Copo de Vidro', preço: 12.49, fragil: true },
    { nome: 'Copo de plástico', preço: 11.99, fragil: false },
]

console.log(produtos.filter2(function(p) {
    return p.fragil && p.preço > 2000
}))