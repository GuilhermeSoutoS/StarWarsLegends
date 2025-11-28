create database starForum;

use starForum;


create table usuario(
id INT primary key auto_increment,
nome varchar(100),
nomeUsuario varchar (30),
dataNasc date,
email varchar(45),
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

create table minigame (
id int primary key auto_increment,
pontuacao INT,
tempo TIME,
fkJogador INT,
CONSTRAINT chkFkJogador
	foreign key (fkJogador) references usuario (id)
);

select * from minigame;

INSERT INTO minigame (fkJogador, pontuacao, tempo)
VALUES (8, 280, '00:00:28');


select pontuacao from minigame where fkJogador = 8;

select max(pontuacao) from minigame
where fkJogador = 8 LIMIT 5;
SELECT * FROM minigame;

update quiz set lado_forca = null
where fkUsuario = 8;

select pontuacao from minigame where fkJogador = 8;
    