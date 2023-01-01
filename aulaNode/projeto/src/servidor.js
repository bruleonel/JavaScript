const porta = 3003

const express = require('express')
const app = express()

app.get('/produto', (red, res, next) => {
    console.log('Middelaware 1...')
    next()
})

app.get('/produto', (red, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) //converter para JSON
})

app.listen(porta, () => {
    console.log (`Servidor está executando na porta ${porta}.`)
})