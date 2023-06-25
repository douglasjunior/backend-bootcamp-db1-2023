const { checkSchema } = require('express-validator');

const validadorCadastroTarefa = checkSchema(
  {
    titulo: {
      isLength: {
        options: { min: 1, max: 1000 },
        errorMessage: 'O título deve ter no mínimo 1 e no máximo 1000 caracteres',
      },
      notEmpty: {
        errorMessage: 'O título é requerido',
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
};
