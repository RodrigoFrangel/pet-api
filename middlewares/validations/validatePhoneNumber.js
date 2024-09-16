// Valida número da pessoa
const validatePhoneNumber = (req, res, next) => {
  const { phoneNumber } = req.body;
  const phoneNumberRegex = /^\d{8,}$/;

  if (!phoneNumber) {
    res.status(400).json({ message: 'É necessário incluir um número de telefone.' });
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    res.status(400).json({ message: 'Por favor, insira um número de telefone válido.' });
  }

  return next();
};

export default validatePhoneNumber;
