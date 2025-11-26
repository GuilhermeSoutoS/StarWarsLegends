var minigameModel = require("../models/minigameModel");

function mostrar(req, res) {
    minigameModel.mostrar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function guardar(req, res) {
    var tempoFinal = req.body.tempoFinalServer;
    var pontuacaoFinal = req.body.pontuacaoFinalServer;
    var b_usuario = req.body.idUsuarioServer;


    if (tempoFinal == undefined) {
        res.status(400).send("Seu tempoFinal está undefined!");
    }else if(pontuacaoFinal == undefined){
        res.status(400).send("Sua pontuaçãoFinal está undefined!");
    }else if(b_usuario == undefined){
        res.status(400).send("Seu id está undefined!");
    }

    minigameModel.guardar(b_usuario,pontuacaoFinal,tempoFinal).then(function(resposta){
        res.status(200).send("Dados guardados com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    mostrar,
    guardar
}