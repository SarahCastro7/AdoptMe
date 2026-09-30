import {animalRepository} from '../repositories/animalRepository.js'

export const animalService = {
    async getALLanimais(){
        return await animalRepository.findAll()
    },

    async getbarbeiro (id) {
        const animalExistente = await animalRepository.findById(id)
        if(!animalExistente) throw new Error ("animal nao foi encontrado")
        return animalExistente
    },

    async createanimal (animalRequisicao){
        if(animalRequisicao.nome.length < 3) {
            throw new Error ("nome do animal deve ter no minimo 3 caracteres")
        }
        return await animalRepository.create(animalRequisicao);
    },

    









}