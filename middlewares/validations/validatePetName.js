// Valida nome do pet
const validatePetName = (req, res, next) => {
  const { name } = req.body;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;

  if (!name) {
    return res.status(400).json({ message: 'É necessário incluir um nome.' });
  }

  if (!nameRegex.test(name)) {
    return res.status(400).json({
      message: 'O nome do pet deve conter pelo menos 2 letras e não pode conter caracteres especiais ou números.',
    });
  }

  return next();
};

export default validatePetName;
