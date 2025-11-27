var database = require("../database/config")

function recorde(id_usuario) {
    var instrucao = `
    select 
        max(pontuacao) as Recorde
    from minigame
    where fkJogador = ${id_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    recorde
};