const Usuarios = require('../models/Usuarios');
const { validarTokenUsuario } = require('../utils/token');

/**
 * Recebe o valor do cabeçalho Authorization e quebra em partes para obter o token.
 *
 * Por exemplo, ao receber: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
 * Retornará: eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp...
 *
 * @param {string} authorization
 * @return {string}
 */
const obtemTokenAutenticacao = (authorization) => {
  if (!authorization) return null;

  const partes = authorization.split(' ');
  return partes[1];
};

/**
 * Recebe o token de autenticação e carrega o "usuarioLogado" dentro do request
 * para ser utilizado nas rotas.
 *
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 * @param {import('express').NextFunction} next
 */
const middlewareAutenticacao = async (request, response, next) => {
  const token = obtemTokenAutenticacao(request.headers.authorization);

  if (!token) {
    response.status(401).send('Token não informado.');
    return;
  }

  try {
    const payload = validarTokenUsuario(token);

    // TODO: implementar aqui

    next();
  } catch (error) {
    console.warn(error);
    response.status(401).send('Token inválido.');
  }
};

module.exports = {
  middlewareAutenticacao,
};
