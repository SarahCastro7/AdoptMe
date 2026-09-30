import { Router } from 'express';
import { animalController } from '../controllers/animalController.js';

const router = Router();

router.get('/animais', animalController.getAll);
router.get('/animais/:id', animalController.getById);
router.post('/animais', animalController.create);
router.put('/animais/:id', animalController.update);
router.delete('/animais/:id', animalController.remove);

export default router;
