const express = require('express')
const app = express();
const rotas = express.Router();
const { getBook } = require('../database/db')


app.use(express.json())

rotas.get('/', function (req, res) {
    res.redirect('/book');
});

rotas.get('/books', getBook);

module.exports = rotas