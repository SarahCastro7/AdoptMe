CREATE TABLE animais (
  id_animal      SERIAL PRIMARY KEY,
  especie_animal TEXT NOT NULL,
  nome_animal    TEXT NOT NULL,
  idade_animal   VARCHAR(50) NOT NULL,
  genero_animal  VARCHAR(50) NOT NULL,   
  foto_animal    TEXT                    
);

CREATE TABLE usuarios (
  id_usuario    SERIAL PRIMARY KEY,
  nome_usuario  TEXT NOT NULL,
  email_usuario VARCHAR(100) NOT NULL UNIQUE,
  senha_usuario VARCHAR(100) NOT NULL    
);
CREATE TABLE doacao (
  id_doacao   SERIAL PRIMARY KEY,
  data_doacao TIMESTAMP DEFAULT NOW(),
  id_usuario  INT REFERENCES usuarios(id_usuario),
  id_animal   INT REFERENCES animais(id_animal)
);

INSERT INTO animais (especie_animal, nome_animal, idade_animal, genero_animal)
VALUES ('tartaruga','Lilica','5','fem'), ('coelho','Dont','6','masc');

ALTER TABLE usuarios DROP COLUMN IF EXISTS id_animal;

  u.id_usuario, u.nome_usuario, u.email_usuario,
  a.id_animal, a.nome_animal, a.especie_animal, a.idade_animal, a.genero_animal,
  d.data_doacao
FROM usuarios u
JOIN doacao d ON d.id_usuario = u.id_usuario
JOIN animais a ON a.id_animal = d.id_animal
ORDER BY d.data_doacao DESC;