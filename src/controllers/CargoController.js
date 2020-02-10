const Cargos = require('../models/Cargo')

module.exports = {

  async index(req, res) {
    const cargos = await Cargos.findAll();
    return res.json(cargos);
  },

  async store(req, res) {

    const { name, type } = req.body;

    const cargo = await Cargos.create({ name, type });

    return res.json(cargo);
  }
};