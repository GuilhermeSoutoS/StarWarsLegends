var database = require("../database/config")

function mostrar() {
    var instrucao = `
        SELECT * FROM minigame;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function guardar(b_Usuario, pontuacao, tempo) {
    var instrucao = `
        INSERT INTO minigame (fkJogador, pontuacao, tempo)
        VALUES (${b_Usuario}, ${pontuacao}, '${tempo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrar,
    guardar
};