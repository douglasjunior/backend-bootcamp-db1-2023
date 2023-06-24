const jwt = require('jsonwebtoken');

const { JWT_TOKEN } = process.env;

const gerarTokenUsuario = (usuario) => jwt.sign(usuario, JWT_TOKEN, {
  expiresIn: '7d',
});

const validarTokenUsuario = (token) => jwt.verify(token, JWT_TOKEN);

module.exports = {
  gerarTokenUsuario,
  validarTokenUsuario,
};
