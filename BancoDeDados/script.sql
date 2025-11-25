create database starForum;

use starForum;


create table usuario(
id INT primary key auto_increment,
nome varchar(100),
nomeUsuario varchar (30),
dataNasc date,
email varchar(45),
telefone varchar(11),
senha varchar(40)
);
drop table usuario;
insert into usuario (nome, nomeUsuario, dataNasc, email, senha) Values
('Guilherme Souto','gui_souto','2005-11-10','guilherme@gmail.com','11987654321','minhaSenha123');
select * from usuario;

ALTER TABLE usuario DROP COLUMN telefone;

create table quiz(
id INT primary key auto_increment,
fkUsuario INT,
dataResultado DATETIME DEFAULT current_timestamp,
lado_forca tinyint,
constraint chkFkusuarioQuiz
	foreign key(fkUsuario) references usuario(id)
);
drop table quiz;
insert into quiz (fkUsuario, dataResultado, lado_forca)values
(1, '2025-01-01', 1),
(2, '2025-01-02', 1),
(8, '2025-01-02', 1),
(3, '2025-01-03', 0);

SELECT 
            lado_forca,
            COUNT(*) AS total
        FROM quiz
        GROUP BY lado_forca;
        
        
SELECT 
    SUM(CASE WHEN lado_forca = '0' 
    THEN 1 
    ELSE 0 end) AS qtde_negro,
    SUM(CASE WHEN lado_forca = '1' THEN 1 ELSE 0 END) AS qtde_luz
FROM quiz;

select 
	sum(lado_forca = 0) as 'lado negro',
    sum(lado_forca = 1) as 'lado bom'
from quiz;
show tables;

select
	    sum(lado_forca = 0) as 'lado negro'
    from quiz;
    
    SELECT lado_forca
        FROM quiz join usuario on quiz.fkUsuario = usuario.id
        WHERE usuario.id = 5
        ORDER BY usuario.id DESC
        LIMIT 1;
        
        SELECT lado_forca
        FROM quiz join usuario on quiz.fkUsuario = usuario.id
        WHERE usuario.id = 1
        ORDER BY quiz.id DESC
        LIMIT 1;
        
        select * from quiz;
        select * from usuario;