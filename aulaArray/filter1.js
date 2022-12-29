//Para filtrar um array
const produtos = [
    { nome: 'Notbook', preço: 2499, fragil: true },
    { nome: 'iPad Pro', preço: 4199, fragil: true },
    { nome: 'Copo de Vidro', preço: 12.49, fragil: true },
    { nome: 'Copo de plástico', preço: 11.99, fragil: false },
]

console.log(produtos.filter(function(p) {
    return p.fragil && p.preço > 2000
}))