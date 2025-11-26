var express = require("express");
var router = express.Router();

var minigameController = require("../controllers/minigameController");

router.post("/guardar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    minigameController.guardar(req, res);
});

router.get("/mostrar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    minigameController.mostrar(req, res);
});

module.exports = router;