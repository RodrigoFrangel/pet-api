// Valida se a pessoa existe
const validatePetOwnerId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: 'Pessoa não encontrada.' });
  }

  return next();
};

export default validatePetOwnerId;
