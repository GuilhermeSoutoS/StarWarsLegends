var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var id_usuario = req.body.idUsuarioServer;
    var lado_forca = req.body.ladoServer;

    if (id_usuario == undefined) {
        return res.status(400).send("id_usuario está undefined!");
    } else if (lado_forca == undefined) {
       return res.status(400).send("lado_forca está undefined!");
    }

    quizModel.cadastrar(id_usuario, lado_forca).then(function (resposta) {
        res.status(200).send("Quiz finalizado com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


function contagem(req, res) {
    quizModel.contagem().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar,
    contagem
}