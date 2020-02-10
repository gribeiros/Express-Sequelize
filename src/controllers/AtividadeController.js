const Atividades = require('../models/Atividade')

module.exports = {
  async index(req, res) {
    const atividades = await Atividades.findAll();
    res.json(atividades);
  },
  async store(req, res) {
    const { name, descri, name_responsible } = req.body;
    const atividade = await Atividades.create({ name, descri, name_responsible });
    res.json(atividade);
  }
}