const express = require('express');
const { ValidationError } = require('sequelize');

const Usuarios = require('../models/Usuarios');
const { compararSenha } = require('../utils/senha');
const { gerarTokenUsuario } = require('../utils/token');
const { checarResultadoValidacao } = require('../validators');
const { validadorLogin, validadorCadastroUsuario } = require('../validators/usuarios');

const router = express.Router();

function erroEmailDuplicado(error) {
  if (!(error instanceof ValidationError)) {
    return false;
  }

  return error.errors.find((databaseError) => (
    databaseError.type === 'unique violation' && databaseError.path === 'email'
  ));
}

/**
 * Cadastro de usuários
 */
router.post(
  '/',
  validadorCadastroUsuario,
  async (req, res) => {
    if (checarResultadoValidacao(req, res)) {
      return;
    }

    try {
      const { nome, email, senha } = req.body;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      if (erroEmailDuplicado(error)) {
        res.status(402).send('E-mail já cadastrado!');
        return;
      }
      res.status(500).send();
    }
  },
);

/**
 * Login de usuários
 */
router.post(
  '/login',
  validadorLogin,
  async (req, res) => {
    if (checarResultadoValidacao(req, res)) {
      return;
    }

    try {
      const { email, senha } = req.body;

      // TODO: implementar aqui
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

module.exports = router;
