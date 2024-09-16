import 'dotenv/config.js';
import express from 'express';
import router from '../routes/router.js';

const app = express();

// Middleware para ler JSON
app.use(express.json());
app.use(router);

export default app;
