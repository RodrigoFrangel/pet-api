/* eslint-disable max-len */
// // Valida dados da pessoa
// const petOwnerValidations = (req, res, next) => {
//   const { name, email, phoneNumber } = req.body;
//   const { id } = req.params;

//   const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const phoneNumberRegex = /^\d{8,}$/;

//   if (!name) {
//     return res.status(400).json({ message: 'É necessário incluir um nome.' });
//   }
//   if (!email) {
//     return res.status(400).json({ message: 'É necessário incluir um email.' });
//   }
//   if (!phoneNumber) {
//     res.status(400).json({ message: 'É necessário incluir um número de telefone.' });
//   }
//   if (!id) {
//     res.status(404).json({ message: 'Pessoa não encontrada.' });
//   }

//   if (!nameRegex.test(name)) {
//     return res.status(400).json({
//       message: 'O nome da pessoa deve conter pelo menos 2 letras e não pode conter caracteres especiais ou números.',
//     });
//   }
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ message: 'Por favor, insira um email válido.' });
//   }
//   if (!phoneNumberRegex.test(phoneNumber)) {
//     res.status(400).json({ message: 'Por favor, insira um número de telefone válido.' });
//   }

//   return next();
// };

// export default petOwnerValidations;
