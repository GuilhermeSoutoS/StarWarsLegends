var database = require("../database/config")

function resultado(id_usuario) {
    var instrucao = `
          SELECT lado_forca
        FROM quiz join usuario on quiz.fkUsuario = usuario.id
        WHERE usuario.id = ${id_usuario}
        ORDER BY quiz.id DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    resultado
};