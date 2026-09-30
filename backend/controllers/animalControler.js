import {animalService} from '../service/animalService'

export const animalController = {
    async getAll(req, res){
        try{ 
            const animais = await animalService.getAllanimais();
            res.json(animais);
        }catch(error){
            res.status(404).json({erro: error.message})
        }
    },

    async getById(req,res){
        try {
            const animalBuscado = await animalService.getanimal(req.params.id);
            res.status(200).json(animalBuscado);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async create(req, res){
        try{
            const novoanimal = await animalService.createanimal(req.body);
            res.status(201).json(novoanimal);
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    async update(req, res){
        try{
            const animalAtualizado = await animalService.updateanimal(
                req.params.id, req.body)
            res.json(animalAtualizado)
        }catch(error){
            const status = error.message === "animal não encontrado" ? 404 : 400;
            res.status(status).json({erro: error.message});
        }
    },

    async patch (req, res){
        try{
            const animalAtualizado = await animalService.patchanimal(
                req.params.id, req.body)
        res.status(200).json(animalAtualizado);
        }catch(error){
            const status = error.message === 'animal não encontrado' ? 404 : 400;
            res.status(status).json({
                erro: error.message
            });
        }
    },
    async delete(req, res){
        try{
        const animaloDeletado = await animalService.deleteanimal(req.params.id);
        res.status(200).json(animalDeletado)
        }catch(error){
            const status = error.message === 'animal não encontrado' ? 404 : 400;
        res.status(status).json({erro: error.message});
        }
    }
}