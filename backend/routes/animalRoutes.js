import { Router } from 'express';
import { barberController } from '../controllers/barberController.js'

const router = Router();

//buscar todos os barbeiros
router.get('/barbeiros', barberController.getAll);
//buscar barbeiro por id
router.get('/barbeiro/:id', barberController.getById);
//cadastrar barbeiro
router.post('/barbeiro', barberController.create);
//atualizar barbeiro
router.put('/barbeiro/:id', barberController.update);
//atualizar parcialmente o barbeiro
router.patch('/barbeiro/:id', barberController.patch);
//deletar barbeiro
router.delete('/barbeiro/:id', barberController.delete);
export default router;