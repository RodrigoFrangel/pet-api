// Valida nome da pessoa
const validatePetOwnerName = (req, res, next) => {
  const { name } = req.body;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;

  if (!name) {
    return res.status(400).json({ message: 'É necessário incluir um nome.' });
  }

  if (!nameRegex.test(name)) {
    return res.status(400).json({
      message: 'O nome da pessoa deve conter pelo menos 2 letras e não pode conter caracteres especiais ou números.',
    });
  }

  return next();
};

export default validatePetOwnerName;
