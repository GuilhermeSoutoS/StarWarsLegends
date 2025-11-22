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
insert into usuario (nome, nomeUsuario, dataNasc, email, telefone, senha) Values
('Guilherme Souto','gui_souto','2005-11-10','guilherme@gmail.com','11987654321','minhaSenha123');
select * from usuario;



create table quiz(
id INT primary key auto_increment,
fkUsuario INT,
dataResultado DATETIME DEFAULT current_timestamp,
lado_forca tinyint NOT NULL,
constraint chkFkusuarioQuiz
	foreign key(fkUsuario) references usuario(id)
);

insert into quiz (fkUsuario, dataResultado, lado_forca)values
(1, '2025-01-01, 1'),
(2, '2025-01-02, 1'),
(3, '2025-01-03, 0');

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
	sum(lado_forca = 0)
show tables