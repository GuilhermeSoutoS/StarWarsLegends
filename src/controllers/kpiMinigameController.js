var kpiMinigameModel = require("../models/kpiMinigameModel");

function recorde(req, res) {
    var id_usuario = req.params.idUsuarioServer;
    kpiMinigameModel.recorde(id_usuario).then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum recorde encontrado!");
                }
            

    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    recorde
}