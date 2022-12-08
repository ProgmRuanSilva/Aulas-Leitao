const express = require('express');
const app = express();

const saudacao = require('./saudacaoMid')

//middleware externo
app.use(saudacao('Ruan'))

app.use('/home', (req, res, next) => {
    console.log('Conceito de Middlewares')
    next()
})

app.get('/home', (req, res) => {
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1},
            {id: 34, name: 'Bia', position: 2},
            {id: 73, name: 'Carlos', position: 3},
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
//ao