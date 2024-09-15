const router = require('express').Router();
const petRoutes = require('./pet.routes');
const petOwnerRoutes = require('./petOwner.routes');

router.use('/pet', petRoutes);
router.use('/petOwner', petOwnerRoutes);

module.exports = router;
