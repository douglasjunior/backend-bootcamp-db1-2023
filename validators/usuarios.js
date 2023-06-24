const { checkSchema } = require('express-validator');

const validadorLogin = checkSchema(
  {
    email: {
      isEmail: {
        errorMessage: 'Informe um endereço de e-mail',
      },
      isLength: {
        options: { min: 1, max: 200 },
        errorMessage: 'O e-mail deve ter no mínimo 1 e no máximo 200 caracteres',
      },
      notEmpty: {
        errorMessage: 'O e-mail é requerido',
      },
    },
    senha: {
      isLength: {
        options: { min: 8, max: 16 },
        errorMessage: 'A senha deve ter no mínimo 8 e no máximo 16 caracteres',
      },
      notEmpty: {
        errorMessage: 'A senha é requerida',
      },
    },
  },
  ['body'],
);

const validadorCadastroUsuario = checkSchema(
  {
    nome: {
      isLength: {
        options: { min: 5, max: 200 },
        errorMessage: 'O nome deve ter no mínimo 5 e no máximo 200 caracteres',
      },
      notEmpty: {
        errorMessage: 'O nome é requerido',
      },
    },
    email: {
      isEmail: {
        errorMessage: 'Informe um endereço de e-mail',
      },
      isLength: {
        options: { min: 1, max: 200 },
        errorMessage: 'O e-mail deve ter no mínimo 1 e no máximo 200 caracteres',
      },
      notEmpty: {
        errorMessage: 'O e-mail é requerido',
      },
    },
    senha: {
      isLength: {
        options: { min: 8, max: 16 },
        errorMessage: 'A senha deve ter no mínimo 8 e no máximo 16 caracteres',
      },
      notEmpty: {
        errorMessage: 'A senha é requerida',
      },
    },
  },
  ['body'],
);

module.exports = {
  validadorLogin,
  validadorCadastroUsuario,
};
