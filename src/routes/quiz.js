var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    // função a ser chamada quando acessar /quiz/registrar
    quizController.registrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /quiz/listar
    quizController.listar(req, res);
});


router.get("/contagem", function (req, res) {
    quizController.contagem(req, res);
});

module.exports = router;
