const Conhecimentos = require('../models/Conhecimento');

module.exports = {
  async index(req, res) {
    const conhecimentos = await Conhecimentos.findAll();
    return res.json(conhecimentos);
  },

  async store(req, res) {
    const { name } = req.body;
    const conhecimento = await Conhecimentos.create({ name });
    return res.json(conhecimento);
  }
}