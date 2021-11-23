const express = require('express');
const app = express();
require('dotenv').config()

const rotas = require('./rotas/rotas.js')
const port = process.env.PORT;

app.use(rotas);
app.use(express.static('public'))


app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
