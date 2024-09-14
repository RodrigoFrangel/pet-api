const router = require('express').Router();
const petController = require('../controllers/pet.controller');

router.post('/', petController.create);
router.get('/', petController.getAll);
router.delete('/', petController.deleteAll);
router.get('/:id', petController.getById);
router.put('/:id', petController.updateById);
router.delete('/:id', petController.deleteById);

module.exports = router;
