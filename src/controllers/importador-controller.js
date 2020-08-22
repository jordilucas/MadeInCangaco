'use strict'

const repository = require('../repositories/importador_repositorie');

exports.post = async(req, res, next) =>{
    try{
        var data = await repository.create({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            localizacao: req.body.localizacao,
            tipoProduct: req.body.tipoProduct
        });
        res.status(201).send({ message: 'Importador cadastrado com sucesso.' });
    }
    catch(error){
        res.status(400).send({ message: 'Error ao cadastrar ', data: error });
    }
}