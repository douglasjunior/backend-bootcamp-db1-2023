const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const { hashSenha } = require('../utils/senha');

const Usuarios = sequelize.define(
  'usuarios',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(500),
      allowNull: false,
      set(value) {
        // Faz o hash da senha antes que ela seja inserida no banco de dados
        // Docs: https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/#setters
        this.setDataValue('senha', hashSenha(value));
      },
    },
  },
  {
    // Docs: https://sequelize.org/docs/v6/core-concepts/model-basics

    // cria index único para impedir que e-mails duplicados sejam cadastrados
    indexes: [
      {
        name: 'usuario_email_unico',
        unique: true,
        fields: ['email'],
      },
    ],

    // renomeia as colunas timestamps padrões do sequelize
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em',

    // configura para que o campo senha seja ocultado por padrão
    // para evitar que seja retornado em consultas
    defaultScope: {
      attributes: {
        exclude: ['senha'],
      },
    },
  },
);

module.exports = Usuarios;
