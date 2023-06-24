const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Tarefas = sequelize.define(
  'tarefas',
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    concluida: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    // Docs: https://sequelize.org/docs/v6/core-concepts/model-basics

    // renomeia as colunas timestamps padrões do sequelize
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em',

    // cria index de busca para otimizar as consultas por título da tarefa
    // exemplo: select * from tarefas where titulo like '%abcd%'
    indexes: [
      {
        type: 'FULLTEXT',
        fields: ['titulo'],
      },
    ],
  },
);

module.exports = Tarefas;
