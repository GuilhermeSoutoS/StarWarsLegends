var database = require("../database/config")

function exibir() {
    var instrucao = `
    select 
	    sum(lado_forca = 0) as lado_negro,
        sum(lado_forca = 1) as lado_luz
    from quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    exibir
};