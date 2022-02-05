const fs = require('fs')

const caminho = __dirname + './dados.txt'

fs.readFileSync(caminho,'utf-8' , (err , conteudo ) =>{
    console.log(conteudo)
})

const config = require('./dados.txt')
console.log(config)