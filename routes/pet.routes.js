import { Router } from 'express';
import controller from '../controllers/pet.controller.js';
import {
  validatePetName,
  validateSpecies,
  validateAge,
  validatePetId,
} from '../middlewares/validations/index.js';

const router = Router();

router.post(
  '/',
  validatePetName,
  validateSpecies,
  validateAge,
  validatePetId,
  controller.create,
);

router.put(
  '/:id',
  validatePetName,
  validateSpecies,
  validateAge,
  validatePetId,
  controller.updateById,
);

router.get('/', controller.getAll);
router.delete('/', controller.deleteAll);
router.get('/:id', validatePetId, controller.getById);
router.delete('/:id', validatePetId, controller.deleteById);

export default router;
