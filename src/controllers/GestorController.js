const Gestores = require('../models/Gestor');

module.exports = {
  async index(req, res) {
    const gestores = await Gestores.findAll();
    res.json(gestores);
  },
  async store(req, res) {
    const { name, matricula, email, telefone } = req.body;
    const gestor = await Gestores.create({ name, matricula, email, telefone });
    res.json(gestor);
  }
}