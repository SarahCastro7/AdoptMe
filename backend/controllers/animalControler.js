import {barberService} from '../services/barberService.js'

export const barberController = {
    async getAll(req, res){
        try{ 
            const barbeiros = await barberService.getAllBarbeiros();
            res.json(barbeiros);
        }catch(error){
            res.status(404).json({erro: error.message})
        }
    },

    async getById(req,res){
        try {
            const barbeiroBuscado = await barberService.getBarbeiro(req.params.id);
            res.status(200).json(barbeiroBuscado);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async create(req, res){
        try{
            const novoBarbeiro = await barberService.createBarbeiro(req.body);
            res.status(201).json(novoBarbeiro);
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    async update(req, res){
        try{
            const barbeiroAtualizado = await barberService.updateBarbeiro(
                req.params.id, req.body)
            res.json(barbeiroAtualizado)
        }catch(error){
            const status = error.message === "Barbeiro não encontrado" ? 404 : 400;
            res.status(status).json({erro: error.message});
        }
    },

    async patch (req, res){
        try{
            const barbeiroAtualizado = await barberService.patchBarbeiro(
                req.params.id, req.body)
        res.status(200).json(barbeiroAtualizado);
        }catch(error){
            const status = error.message === 'Barbeiro não encontrado' ? 404 : 400;
            res.status(status).json({
                erro: error.message
            });
        }
    },
    async delete(req, res){
        try{
        const barbeiroDeletado = await barberService.deleteBarbeiro(req.params.id);
        res.status(200).json(barbeiroDeletado)
        }catch(error){
            const status = error.message === 'Barbeiro não encontrado' ? 404 : 400;
        res.status(status).json({erro: error.message});
        }
    }
}