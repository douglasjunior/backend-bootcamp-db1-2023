const { checkSchema } = require('express-validator');

const validadorLogin = checkSchema(
  {
    // TODO: implementar validação
  },
  ['body'],
);

const validadorCadastroUsuario = checkSchema(
  {
    // TODO: implementar validação
  },
  ['body'],
);

module.exports = {
  validadorLogin,
  validadorCadastroUsuario,
};
