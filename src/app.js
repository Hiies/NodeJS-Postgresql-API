const express = require('express');
const app = express();
require('dotenv').config()

const { Client } = require('pg')
const client = new Client({
    user: process.env.USER,
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port: process.env.PORTDB,
    database: process.env.DATABASE 
})

const rotas = require('./rotas/rotas.js')
const port = process.env.PORT;

app.use(rotas);
app.use(express.static('public'))

client.connect()
client.query('select * from book').then(results => {
    const resultado = results.rows
    console.log(resultado);
}).finally(()=> client.end())


app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
