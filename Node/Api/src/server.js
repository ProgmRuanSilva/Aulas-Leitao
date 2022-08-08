const porta = 3003

const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const bank = require('./bank')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bank.getProdutos())// Converte em json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bank.getProduto(req.params.id))// Converte em json
})

app.post('/produtos', (req, res, next) => {
    const produto = bank.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bank.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bank.excProduto(req.params.id)
    res.send(produto)
})


app.listen(porta, () => {
    console.log(`a porta está aberta em ${porta}`)
})
