const Pessoas = require('../models/Pessoa');

module.exports = {
  async index(req, res) {
    const pessoas = await Pessoas.findAll();
    res.json(pessoas);
  },
  async store(req, res) {
    const { name, date_nasc, rg, cpf, celular } = req.body;
    const pessoa = await Pessoas.create({ name, date_nasc, rg, cpf, celular });
    res.json(pessoa);
  }
}