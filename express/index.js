
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

//usando modulo externo
app.post('/usuario', usuarioApi.salvar) //vc pode usar funções externas dentro de outro modulo
app.get('/usuario', usuarioApi.obter)

//middleware externo
app.use(saudacao('Ruan'))

//req dos body parser
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//body Parser transforma automaticamente pra podermos trabalhar melhor


app.use('/home', (req, res, next) => {
    console.log('Conceito de Middlewares')
    next()
})
//relatorio primeiro pois importa mais assim
app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente Relatório completo: ${req.query.completo} ano= ${req.query.ano}`)
})//query é o corpo da req

//body da req
app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body.nome)
})

//id depois pois se não ouver relatório ele assumira o id
app.get('/clientes/:id', (req, res) => { //:pra interpretar os dados
    res.send(`Cliente ${req.params.id} selecionado!`) //params nesse caso é passado no endereço da url
})

app.get('/home', (req, res) => {
    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 },
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
})

app.listen(3000, () => {
    console.log('working...')
})

//tipos de req e res:
//all use get, etc são usados em uma api rest
//ele pode responder html tambem embora não seja muito usado
//<h1>Estou Bem!<h1/> <br><br><br>Tipo HTML!<br><br>
//tambem pode trasforma json com res.json 
//pode tambem ter um array de objs

// middleware:
//importa a ordem sim
//o terceiro parametro que define se será chamado a proxima função
//em caso de não ser passado a url antes dos parametros ele será chamado em qualquer req
//