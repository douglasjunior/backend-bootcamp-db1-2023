const express = require('express');
const Tarefas = require('../models/Tarefas');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await Tarefas.findAll();
    res.json(result);
  } catch (error) {
    console.warn(error);
    res.status(500).send();
  }
});

module.exports = router;
