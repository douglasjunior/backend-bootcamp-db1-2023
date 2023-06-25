const jwt = require('jsonwebtoken');

const { JWT_TOKEN } = process.env;

/**
 * Gera o token JWT para o usuário com validade de 7 dias.
 * Docs: https://github.com/auth0/node-jsonwebtoken
 *
 * @param {object} usuario
 * @returns {string}
 */
const gerarTokenUsuario = (usuario) => jwt.sign(usuario, JWT_TOKEN, {
  expiresIn: '7d',
});

/**
 * Valida o token JWT fornecido e retorna o payload caso esteja válido.
 * Docs: https://github.com/auth0/node-jsonwebtoken
 *
 * @param {string} token
 * @returns {object}
 */
const validarTokenUsuario = (token) => jwt.verify(token, JWT_TOKEN);

module.exports = {
  gerarTokenUsuario,
  validarTokenUsuario,
};
