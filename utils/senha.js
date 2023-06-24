const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

const hashSenha = (senha) => bcrypt.hashSync(senha, salt);

const compararSenha = (senha, hash) => bcrypt.compareSync(senha, hash);

module.exports = {
  hashSenha,
  compararSenha,
};
