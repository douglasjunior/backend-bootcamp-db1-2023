const express = require('express');
const sequelize = require('../database/sequelize');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('As rotas disponíveis são "/usuarios" e "/tarefas".');
});

router.get('/healthcheck', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(204).send();
  } catch (error) {
    console.warn(error);
    res.status(500).send();
  }
});

module.exports = router;
