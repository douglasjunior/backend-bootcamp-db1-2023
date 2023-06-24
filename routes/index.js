const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('As rotas disponíveis são "/usuarios" e "/tarefas".');
});

module.exports = router;
