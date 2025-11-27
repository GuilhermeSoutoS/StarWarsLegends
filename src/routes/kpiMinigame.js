var express = require("express");
var router = express.Router();
var kpiMinigameController = require("../controllers/kpiMinigameController");

router.get("/recorde/:idUsuarioServer", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiMinigameController.recorde(req, res);
});

module.exports = router;