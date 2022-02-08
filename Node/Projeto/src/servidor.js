const porta = 3003 

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const  bancoDeDados = require('./bancoDeDados')





app.use(bodyParser.urlencoded({extended : true}))





 app.get('/produtos' , (req , res , next) =>{
    res.send(bancoDeDados.getProdutos()) //Metodo send converte o objeto para json automaticamente

})

app.get('/produtos/:id', (req , res  , next) => {
        res.send(bancoDeDados.getProduto(req.params.id))
})


app.post('/produtos', (req ,res ,next) => {
    const produto = bancoDeDados.salvarProduto({
       
        preco :req.body.preco, 
        nome : req.body.nome
        

    })

    res.send(produto) //JSON 
})

app.put('/produtos/:id', (req ,res ,next) => {
    const produto = bancoDeDados.salvarProduto({
       
        id : req.params.id,
        preco :req.body.preco, 
        nome : req.body.nome
        

    })

    res.send(produto) //JSON 
})

app.delete('/produtos/:id ', (req ,res ,next) => {


    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON 


})




app.listen(porta , () => {
    console.log(`Servidor  executando na porta ${porta}.`)
})
