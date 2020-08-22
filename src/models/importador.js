'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type:String,
        required:true
    },
    cnpj:{
        type:String,
        required:true
    },
    localizacao:{
        type:String,
        required:true
    },
    tipoProduct:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Importador', schema);