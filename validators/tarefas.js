const { checkSchema } = require('express-validator');

const validadorCadastroTarefa = checkSchema(
  {
    titulo: {
      notEmpty: {
        errorMessage: 'O título é obrigatório',
      },
      isLength: {
        options: {
          min: 1,
          max: 1000,
        },
        errorMessage: 'O título deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
      isString: {
        errorMessage: 'O título deve ser uma string',
      },
    },
    concluida: {
      isBoolean: {
        errorMessage: 'Valor precisa ser boolean',
      },
      optional: true,
    },
  },
  ['body'],
);

const validadorAtualizacaoTarefa = checkSchema(
  {
    titulo: {
      optional: true,
      notEmpty: {
        errorMessage: 'O título é obrigatório',
      },
      isLength: {
        options: {
          min: 1,
          max: 1000,
        },
        errorMessage: 'O título deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
      isString: {
        errorMessage: 'O título deve ser uma string',
      },
    },
    concluida: {
      isBoolean: {
        errorMessage: 'Valor precisa ser boolean',
      },
      optional: true,
    },
  },
  ['body'],
);

module.exports = {
  validadorCadastroTarefa,
  validadorAtualizacaoTarefa,
};
