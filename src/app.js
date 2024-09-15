require('dotenv').config();
const express = require('express');
const router = require('../routes/router');

const app = express();

// Middleware para ler JSON
app.use(express.json());
app.use(router);

module.exports = app;
