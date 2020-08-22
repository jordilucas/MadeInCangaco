const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const config = require('./config');

const app = express();
const router = express.Router();

//Carrega rotas
const index = require('./routes/index');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//habilita cors
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', index);

module.exports = app;