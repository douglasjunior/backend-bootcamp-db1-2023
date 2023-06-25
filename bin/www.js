#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * Module dependencies.
 */

const path = require('path');
const dotenv = require('dotenv').config;

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  /**
   * Carrega as variáveis de ambiente do arquivo "dev.env".
   * Porém o carregamento é feito apenas quando o projeto está rodando
   * localmente em modo de desenvolvimento.
   */
  dotenv({
    path: path.resolve(__dirname, '../dev.env'),
  });
}

const debug = require('debug')('backend-bootcamp-db1-2023:server');
const http = require('http');

const app = require('../app');
const sequelize = require('../database/sequelize');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const portNumber = parseInt(val, 10);

  if (Number.isNaN(portNumber)) {
    // named pipe
    return val;
  }

  if (portNumber >= 0) {
    // port number
    return portNumber;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);

  sequelize.authenticate()
    .then(() => {
      console.warn('Conectado com sucesso ao banco e dados!');
      // Após conectar na base de dados, chama o "sync" para criar as tabelas
      // caso ainda não existam.
      // Em um projeto real, este tipo de coisa deve ser feito via migração de banco de dados
      // e não automaticamente pelo Sequelize.
      // Docs: https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization
      return sequelize.sync({ alter: true });
    })
    .catch((error) => {
      console.warn('Erro ao conectar ao banco e dados:', error);
    });
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
