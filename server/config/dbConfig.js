require('dotenv').config()
const pg = require('pg')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env

const { Pool, Client } = require('pg')

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const pool = new Pool ({
  connectionString: connectionString
})

// Checks connection 
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports = pool


// postgres promise
// used to 


