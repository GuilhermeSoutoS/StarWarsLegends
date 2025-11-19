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
fkusuario INT,
dataResultado DATE,
lado_forca VARCHAR(10)
CONSTRAINT chk_lado_forca (CHECK lado_forca IN ('lado_negro','lado-bom'))
);