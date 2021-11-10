const express = require('express')
const app = express();
const rotas = express.Router();
const path = require('path');


app.use(express.json())



rotas.use('/', (req, res) => {
    res.send('hello world')
})





module.exports = rotas