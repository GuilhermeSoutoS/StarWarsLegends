var express = require("express");
var router = express.Router();
var resultadoQuizController = require("../controllers/resultadoQuizController");

router.get("/resultado/:idUsuarioServer", function (req, res) {
    resultadoQuizController.resultado(req, res);
});

module.exports = router;