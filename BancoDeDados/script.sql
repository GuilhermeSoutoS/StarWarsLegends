create database starForum;

use starForum;


create table usuario(
id INT primary key auto_increment,
nome varchar(100),
nomeUsuario varchar (30),
dataNasc date,
email varchar(45),
telefone varchar(11),
cpf char(11),
rua varchar(45),
bairro varchar(45),
numero varchar(10),
complemento varchar(45),
senha varchar(40)
);

insert into usuario (nome, nomeUsuario, dataNasc, email, telefone, cpf, rua, bairro, numero, complemento, senha) Values
('Guilherme Souto','gui_souto','2005-11-10','guilherme@gmail.com','11987654321','12345678901','Rua das Palmeiras','Centro','120','Apto 302','minhaSenha123');
select * from usuario;
create table quiz(
id INT primary key auto_increment,
quantLadoNegro INT,
quantLadoBom INT
);