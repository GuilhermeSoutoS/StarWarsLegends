var database = require("../database/config")

function exibir() {
    var instrucao = `
    select 
	    sum(lado_forca = 0) as lado_luz,
        sum(lado_forca = 1) as lado_negro
    from quiz q
JOIN (
    SELECT fkUsuario, MAX(id) AS ultimo_id
    FROM quiz
    GROUP BY fkUsuario
) AS ultimos ON q.id = ultimos.ultimo_id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    exibir
};