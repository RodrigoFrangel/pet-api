// Valida email da pessoa
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
    return res.status(400).json({ message: 'É necessário incluir um email.' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Por favor, insira um email válido.' });
  }

  return next();
};
export default validateEmail;
