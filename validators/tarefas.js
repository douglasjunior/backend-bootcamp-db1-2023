const { checkSchema } = require('express-validator');

const validadorCadastroTarefa = checkSchema(
  {
    titulo: {
      isLength: {
        options: { min: 1, max: 1000 },
        errorMessage: 'O título deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
      isString: {
        errorMessage: 'O título deve ser uma string',
      },
    },
    concluida: {
      isBoolean: {
        errorMessage: 'A propriedade concluida deve ser um boolean',
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
      isString: {
        errorMessage: 'O título deve ser uma string',
      },
      isLength: {
        options: { min: 1, max: 1000 },
        errorMessage: 'O título deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
    },
    concluida: {
      isBoolean: {
        errorMessage: 'A propriedade concluida deve ser um boolean',
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
