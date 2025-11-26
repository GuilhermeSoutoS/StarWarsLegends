var ResultadoGameModel = require("../models/ResultadoGameModel");

function exibir(req, res) {
    var b_usuario = req.params.idUsuarioServer;

    if (!b_usuario) {
        return res.status(400).send("ID do usuário não foi enviado!");
    }
    ResultadoGameModel.exibir(b_usuario).then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    exibir
}