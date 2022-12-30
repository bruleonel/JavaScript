//console.log(global)
//Pode ser personalizado dessa forma:
globalThis.MinhaApp = Object.freeze({ //freeze para congelar e não ser alterado
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})//Pode ser acessado por outro arquivo