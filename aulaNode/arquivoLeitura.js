const fs = require('fs')

const caminho = __dirname + '/arquivo.Json'

//Ler arquivo de forma síncrona 
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Ler arquivo de forma assíncrona - indicado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//Leitura de pastas
fs.readdir(__dirname, (err, arquivo) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivo)
})