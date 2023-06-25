const { checkSchema } = require('express-validator');

const validadorCadastroTarefa = checkSchema(
  {
    // TODO: implementar validação
  },
  ['body'],
);

const validadorAtualizacaoTarefa = checkSchema(
  {
    // TODO: implementar validação
  },
  ['body'],
);

module.exports = {
  validadorCadastroTarefa,
  validadorAtualizacaoTarefa,
};
