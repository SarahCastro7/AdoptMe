import { query } from '../config/db.js';

// apelidos: o front usa nome/especie/idade/genero/foto
const COLS = `id_animal AS id, nome_animal AS nome, especie_animal AS especie,
              idade_animal AS idade, genero_animal AS genero, foto_animal AS foto`;

export const animalRepository = {
  async findAll() {
    return (await query(`SELECT ${COLS} FROM animais ORDER BY id_animal DESC`)).rows;
  },
  async findById(id) {
    return (await query(`SELECT ${COLS} FROM animais WHERE id_animal = $1`, [id])).rows[0];
  },
  async create({ nome, especie, idade, genero, foto }) {
    return (await query(
      `INSERT INTO animais (nome_animal, especie_animal, idade_animal, genero_animal, foto_animal)
       VALUES ($1,$2,$3,$4,$5) RETURNING ${COLS}`,
      [nome, especie, idade, genero, foto || null])).rows[0];
  },
  async update(id, { nome, especie, idade, genero, foto }) {
    return (await query(
      `UPDATE animais SET nome_animal=$1, especie_animal=$2, idade_animal=$3,
              genero_animal=$4, foto_animal=COALESCE($5, foto_animal)
       WHERE id_animal=$6 RETURNING ${COLS}`,
      [nome, especie, idade, genero, foto || null, id])).rows[0];
  },
  async remove(id) {
    return (await query(`DELETE FROM animais WHERE id_animal=$1 RETURNING ${COLS}`, [id])).rows[0];
  }
};
