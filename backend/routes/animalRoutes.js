import { Router } from 'express';
import { animalController } from '../controllers/animalControler.js'

const router = Router();

router.get('/animais', animalController.getAll);
router.get('/animal/:id', animalController.getById);
router.post('/animal', animalController.create);
router.put('/animal/:id', animalController.update);
router.patch('/animal/:id', animalController.patch);
router.delete('/animal/:id', animalController.delete);
export default router;