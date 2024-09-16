import { Router } from 'express';
import controller from '../controllers/petOwner.controller.js';
import {
  validatePetOwnerName,
  validateEmail,
  validatePhoneNumber,
  validatePetOwnerId,
} from '../middlewares/validations/index.js';

const router = Router();

router.post(
  '/',
  validatePetOwnerName,
  validateEmail,
  validatePhoneNumber,
  controller.create,
);

router.put(
  '/:id',
  validatePetOwnerId,
  validatePetOwnerName,
  validateEmail,
  validatePhoneNumber,
  controller.updateById,
);

router.get('/', controller.getAll);
router.get('/:id', validatePetOwnerId, controller.getById);
router.delete('/:id', validatePetOwnerId, controller.deleteById);

export default router;
