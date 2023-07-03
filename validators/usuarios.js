const { checkSchema } = require('express-validator');

const validadorLogin = checkSchema(
  {
    email: {
      isEmail: {
        errorMessage: 'Informe um e-mail válido',
      },
      isLength: {
        options: {
          min: 1,
          max: 200,
        },
        errorMessage: 'O e-mail deve ter no mínimo 1 e no máximo 200 caracteres',
      },
    },
    senha: {
      notEmpty: {
        errorMessage: 'A senha é obrigatória',
      },
      isLength: {
        options: {
          min: 8,
          max: 16,
        },
        errorMessage: 'A senha deve ter no mínimo 8 e no máximo 16 caracteres',
      },
    },
  },
  ['body'],
);

const validadorCadastroUsuario = checkSchema(
  {
    nome: {
      notEmpty: {
        errorMessage: 'O nome não pode ser vazio',
      },
      isLength: {
        options: {
          min: 3,
          max: 200,
        },
        errorMessage: 'O nome deve ter no mínimo 3 e no máximo 200 caracteres',
      },
    },
    email: {
      isEmail: {
        errorMessage: 'Informe um e-mail válido',
      },
      isLength: {
        options: {
          min: 1,
          max: 200,
        },
        errorMessage: 'O e-mail deve ter no mínimo 1 e no máximo 200 caracteres',
      },
    },
    senha: {
      notEmpty: {
        errorMessage: 'A senha é obrigatória',
      },
      isLength: {
        options: {
          min: 8,
          max: 16,
        },
        errorMessage: 'A senha deve ter no mínimo 8 e no máximo 16 caracteres',
      },
    },
  },
  ['body'],
);

module.exports = {
  validadorLogin,
  validadorCadastroUsuario,
};
