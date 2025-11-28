var kpiModel = require("../models/kpiModel");

function exibir(req, res) {
    kpiModel.exibir().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        var lado_negro = resultado[0].lado_negro;
        var lado_luz = resultado[0].lado_luz;

        var universoEmPerigo = lado_negro > lado_luz;
        var universoSalvo = lado_luz > lado_negro
        res.status(200).json({

            sith: lado_negro,
            jedi: lado_luz,
            universo_Em_Perigo: universoEmPerigo,
            universoSalvo: universoSalvo
        });

    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    exibir
}