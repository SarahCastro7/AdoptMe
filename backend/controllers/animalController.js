import { animalRepository } from '../repositories/animalRepository.js';

const falha = (msg, status = 400) => Object.assign(new Error(msg), { status });

export const animalService = {
  listar: () => animalRepository.findAll(),

  async buscar(id) {
    const animal = await animalRepository.findById(id);
    if (!animal) throw falha('Animal não encontrado', 404);
    return animal;
  },

  criar: (dados) => animalRepository.create(validar(dados)),

  async atualizar(id, dados) {
    const animal = await animalRepository.update(id, validar(dados));
    if (!animal) throw falha('Animal não encontrado', 404);
    return animal;
  },

  async remover(id) {
    const animal = await animalRepository.remove(id);
    if (!animal) throw falha('Animal não encontrado', 404);
    return animal;
  }
};
