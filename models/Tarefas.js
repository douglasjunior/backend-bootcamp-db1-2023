const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const Usuarios = require('./Usuarios');

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
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
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

/**
 * Configura a relação entre usuários e tarefas, onde uma tarefa "pertence à" um
 * usuário.
 *
 * Deste modo será criada uma chave estrangeira "usuarios_id" na tabela "tarefas".
 *
 * Docs: https://sequelize.org/docs/v6/core-concepts/assocs/
 */
Tarefas.belongsTo(Usuarios, {
  // TODO: implementar aqui
});

module.exports = Tarefas;
