const Sequelize = require('sequelize');

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    dialect: 'mysql',
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    define: {
      // ativa os timestamps e configura para ser criado com
      // underline entre as palavras
      timestamps: true,
      underscored: true,
    },
  },
);

module.exports = sequelize;
