import 'dotenv/config.js';
import mongoose from 'mongoose';
import app from './app.js';

// Importa os valores do .env e os armazena em variáveis
const { DB_USER } = process.env;
const { DB_PASSWORD } = process.env;
const PORT = process.env.PORT || 3000;

// Conecta ao MongoDB (assumindo uma instância local do MongoDB)
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@simplercluster.akl99.mongodb.net/?retryWrites=true&w=majority&appName=SimplerCluster`, {
}).then(() => {
  console.log('Conectado ao MongoDB!');

  // Verifica se o servidor está rodando na porta 3000
  app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
  });
}).catch((err) => {
  console.log('Erro ao conectar com o MongoDB:', err.message);
});
