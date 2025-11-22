var express = require("express");
var router = express.Router();
var kpiController = require("../controllers/kpiController");

router.get("/exibir", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    kpiController.exibir(req, res);
});

module.exports = router;