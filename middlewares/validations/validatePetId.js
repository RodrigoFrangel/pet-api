// Valida so pet existe
const validatePetId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({ message: 'Pet não encontrado.' });
  }

  return next();
};

export default validatePetId;
