select * from usuarios
select * from animais
select * from doacao

create table animais (
	id_animal serial primary key, 
	especie_animal text not null,
	nome_animal text not null,
	idade_animal varchar(50) not null,
	genero_animal varchar(50) not null
)

create table usuarios (
	id_usuario serial primary key,
	nome_usuario text not null,
	email_usuario varchar(100) not null unique,
	senha_usuario varchar(100) not null,
	id_animal serial,
	FOREIGN KEY (id_animal) references animais(id_animal)
) 

create table doacao (
	id_doacao serial primary key,
	data_doacao TIMESTAMP,
	id_usuario serial,
	id_animal serial,
		FOREIGN KEY (id_animal) references animais(id_animal),
		FOREIGN KEY (id_usuario) references usuarios(id_usuario)
)


insert into animais (especie_animal, nome_animal, idade_animal, genero_animal)
values ('tartaruga' ,'lilica', 5 , 'fem')

insert into usuarios (nome_usuario, email_usuario, senha_usuario)
values ('nanda' , 'nandatsu0@gmail.com' , 4848)

insert into animais (especie_animal, nome_animal, idade_animal, genero_animal)
values ('coelho' ,'dont', 6 , 'masc')

insert into usuarios (nome_usuario, email_usuario, senha_usuario)
values ('layla' , 'laylacollen@gmail.com' , 2222)

SELECT
    u.id_usuario,
    u.nome_usuario,
    u.email_usuario,
    a.id_animal,
    a.nome_animal,
    a.especie_animal,
    a.idade_animal,
    a.genero_animal
FROM usuarios u
JOIN animais a
    ON u.id_animal = a.id_animal;