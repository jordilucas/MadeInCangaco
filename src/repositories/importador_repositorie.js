'use strict'

const mongoose = require('mongoose')
const importador = mongoose.model('Importador')

exports.create = async(data) =>{
    var importador = new Importador(data);
    await importador.save();
}