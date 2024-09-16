// Valida idade do pet
const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (age !== undefined && (typeof age !== 'number' || age < 0)) {
    return res.status(400).json({ message: 'A idade do pet deve ser um número positivo.' });
  }

  return next();
};

export default validateAge;
