import { Router } from 'express';
import petRoutes from './pet.routes.js';
import petOwnerRoutes from './petOwner.routes.js';

const router = Router();

router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoutes);

export default router;
