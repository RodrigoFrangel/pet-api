const router = require('express').Router();
const petOwnerController = require('../controllers/petOwner.controller');

router.post('/', petOwnerController.create);
router.get('/', petOwnerController.getAll);

module.exports = router;
