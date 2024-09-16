// Valida espécie do pet
const validateSpecies = (req, res, next) => {
  const { species } = req.body;
  const speciesRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;

  if (!species) {
    return res.status(400).json({ message: 'A espécie do pet é obrigatória.' });
  }

  if (!speciesRegex.test(species)) {
    return res.status(400).json({
      message: 'Por favor, insira uma espécie válida. Deve conter no mínimo 2 letras, sem números ou caracteres especiais.',
    });
  }

  return next();
};

export default validateSpecies;
