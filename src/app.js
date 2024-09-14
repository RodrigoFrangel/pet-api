require('dotenv').config();
const express = require('express');
const router = require('../routes/pet.routes');

const app = express();

// Middleware para ler JSON
app.use(express.json());
app.use('/pet', router);

module.exports = app;
