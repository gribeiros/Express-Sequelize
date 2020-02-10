const Avaliacoes = require('../models/Avaliacao')

module.exports = {

  async index(req, res) {
    const avalicoes = await Avaliacoes.findAll();
    return res.json(avalicoes);
  },

  async store(req, res) {

    const { descri } = req.body;

    const avalicao = await Avaliacoes.create({ descri });

    return res.json(avalicao);
  }
};