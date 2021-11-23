const { Client } = require('pg')
const rotas = require('../rotas/rotas.js')

const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.PORTDB,
    database: process.env.DATABASE 
})
client.connect()


exports.getBook = async (req, res)=> {
    const resultado = await client.query('select * from books')
    //console.log(resultado.rows);
    res.json(resultado.rows)
}

