const config = require('../knexfile.js')
const knex = require('knex')(config)

//migrations
knex.migrate.latest(config)
module.exports = knex