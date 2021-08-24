const {Client} = require('pg')

const client = new Client({
    host: "192.170.0.55",
    user: "postgres",
    port: 5432,
    password: "root",
    database: "ProyectoRedSocial"
})

module.exports = client