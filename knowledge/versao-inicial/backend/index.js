const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

//config knex
app.db = db

//consing for manutation of dependencies.
consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./config/routes.js')
    .then('./api')
    .into(app)

app.listen(3000, () => {
    console.log('API Working...')
})