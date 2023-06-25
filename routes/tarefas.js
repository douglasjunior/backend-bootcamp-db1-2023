const express = require('express');

const { middlewareAutenticacao } = require('../middlewares/autenticacao');
const Tarefas = require('../models/Tarefas');
const { checarResultadoValidacao } = require('../validators');
const { validadorCadastroTarefa } = require('../validators/tarefas');

const router = express.Router();

/**
 * Cadastro de tarefas para o usuário logado
 */
router.post(
  '/',
  middlewareAutenticacao,
  validadorCadastroTarefa,
  async (req, res) => {
    if (checarResultadoValidacao(req, res)) {
      return;
    }

    try {
      const { usuarioLogado, body } = req;

      const { titulo, concluida } = body;

      const result = await Tarefas.create({
        titulo,
        concluida,
        usuario_id: usuarioLogado.id,
      });

      const tarefa = await Tarefas.findByPk(result.get('id'));

      res.status(201).json(tarefa);
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Consulta de tarefas do usuário logado
 */
router.get(
  '/',
  middlewareAutenticacao,
  async (req, res) => {
    try {
      const { usuarioLogado } = req;

      const result = await Tarefas.findAll({
        where: {
          usuario_id: usuarioLogado.id,
        },
      });

      res.status(200).json(result);
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Retorna tarefa por ID do usuário logado
 */
router.get(
  '/:tarefaId',
  middlewareAutenticacao,
  async (req, res) => {
    try {
      const { usuarioLogado, params } = req;

      const { tarefaId } = params;

      const result = await Tarefas.findOne({
        where: {
          id: tarefaId,
          usuario_id: usuarioLogado.id,
        },
      });

      if (!result) {
        res.status(404).send('Tarefa não encontrada');
        return;
      }

      res.status(200).json(result);
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Atualiza a tarefa alterando o valor da coluna "concluida" para true ou false.
 *
 * Em caso de sucesso retorna o objeto da tarefa atualizada.
 *
 * Caso não encontre a tarefa retorna "null".
 *
 * @param {number} usuarioId
 * @param {number} tarefaId
 * @param {boolean} concluida
 * @returns {object|null}
 */
const atualizaSituacaoTarefa = async (usuarioId, tarefaId, concluida) => {
  const result = await Tarefas.findOne({
    where: {
      id: tarefaId,
      usuario_id: usuarioId,
    },
  });

  if (!result) {
    return null;
  }

  /**
   * Atualiza o valor da coluna "concluida"
   * Docs: https://sequelize.org/docs/v6/core-concepts/model-instances/#updating-an-instance
   */
  result.concluida = concluida;
  await result.save();

  return result;
};

/**
 * Marca a tarefa do usuário como concluída
 */
router.put(
  '/:tarefaId/concluida',
  middlewareAutenticacao,
  async (req, res) => {
    try {
      const { usuarioLogado, params } = req;

      const { tarefaId } = params;

      const result = await atualizaSituacaoTarefa(
        usuarioLogado.id,
        tarefaId,
        true,
      );

      if (!result) {
        res.status(404).send('Tarefa não encontrada');
        return;
      }

      res.status(200).json(result);
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

/**
 * Marca a tarefa do usuário como pendente
 */
router.put(
  '/:tarefaId/pendente',
  middlewareAutenticacao,
  async (req, res) => {
    try {
      const { usuarioLogado, params } = req;

      const { tarefaId } = params;

      const result = await atualizaSituacaoTarefa(
        usuarioLogado.id,
        tarefaId,
        false,
      );

      if (!result) {
        res.status(404).send('Tarefa não encontrada');
        return;
      }

      res.status(200).json(result);
    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);

module.exports = router;
