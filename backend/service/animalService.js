import {barberRepository} from '../repositories/barberRepository.js'

export const BarbeiroService = {
    async getALLbarbeiros(){
        return await barberRepository.findAll()
    },

    async getbarbeiro (id) {
        const barbeiroExistente = await barberRepository.findById(id)
        if(!barbeiroExistente) throw new Error ("barbeiro nao foi encontrado")
        return barbeiroExistente
    },

    async createBarbeiro (barbeiroRequisicao){
        if(barbeiroRequisicao.nome.length < 3) {
            throw new Error ("nome do barbeiro deve ter no minimo 3 caracteres")
        }
        return await barberRepository.create(barbeiroRequisicao);
    },

    









}