const express = require('express')
const app = express()
const bodyParcer = require('body-parser')

app.use(bodyParcer.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns<h1/>')
})

app.listen(3003)