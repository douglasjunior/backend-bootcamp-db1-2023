const { validationResult } = require('express-validator');

const checarResultadoValidacao = (request, response) => {
  const result = validationResult(request);

  if (!result.isEmpty()) {
    response.status(422).json(result.array());
    return true;
  }

  return false;
};

module.exports = {
  checarResultadoValidacao,
};
