var database = require("../database/config")

function exibir(id_usuario) {
    var instrucao = `
          SELECT pontuacao FROM minigame WHERE fkJogador = ${id_usuario};

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    exibir
};