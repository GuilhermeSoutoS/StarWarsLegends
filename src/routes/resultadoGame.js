var express = require("express");
var router = express.Router();

var ResultadoGameController = require("../controllers/ResultadoGameController");

router.get("/exibir/:idUsuarioServer", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    ResultadoGameController.exibir(req, res);
});

module.exports = router;