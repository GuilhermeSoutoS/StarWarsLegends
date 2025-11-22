var empresaModel = require("../models/empresaModel");

function buscarPorCnpj1(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj1(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar1(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId1(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId1(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar1(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCnpj1(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorCnpj1,
  buscarPorId1,
  cadastrar1,
  listar1,
};
