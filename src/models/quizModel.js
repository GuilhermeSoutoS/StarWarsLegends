var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function registrar(idUsuario, lado_forca) {
    var instrucao = `
       INSERT INTO quiz (fkUsuario, lado_forca)
        VALUES (${idUsuario}, ${lado_forca});
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function contagem() {
    var instrucao = `
        SELECT 
            lado_forca,
            COUNT(*) AS total
        FROM quiz
        GROUP BY lado_forca;
    `;
    console.log("Executando SQL: " + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    registrar,
    listar,
    contagem,
};