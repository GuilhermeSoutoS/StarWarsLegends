var resultadoQuizModel = require("../models/resultadoQuizModel");

function resultado(req, res) {
    var id_usuario = req.params.idUsuarioServer;

    if (!id_usuario) {
        return res.status(400).send("ID do usuário não foi enviado!");
    }
    resultadoQuizModel.resultado(id_usuario).then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    resultado
}