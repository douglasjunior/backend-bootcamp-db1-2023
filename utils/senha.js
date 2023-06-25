const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

/**
 * Faz o hash da senha do usuário para armazenar no banco e dados
 * usando bcrypt.
 *
 * Docs: https://github.com/dcodeIO/bcrypt.js
 * Docs: https://pt.wikipedia.org/wiki/Bcrypt
 *
 * @param {string} senha
 * @returns {string}
 */
const hashSenha = (senha) => bcrypt.hashSync(senha, salt);

/**
 * Compara a senha original ao hash gerado pelo bcrypt,
 * para verificar se são equivalentes.
 *
 * Docs: https://github.com/dcodeIO/bcrypt.js
 * Docs: https://pt.wikipedia.org/wiki/Bcrypt
 *
 * @param {string} senha
 * @param {string} hash
 * @returns {boolean}
 */
const compararSenha = (senha, hash) => bcrypt.compareSync(senha, hash);

module.exports = {
  hashSenha,
  compararSenha,
};
