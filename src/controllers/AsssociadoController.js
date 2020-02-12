const Associados = require('../models/Associado');
const Pessoas = require('../models/Pessoa');

module.exports = {
  async index(req, res) {
    const associados = await Associados.findAll({
      include: [
        { association: 'atividades' },
        { association: 'conhecimentos' },
        { association: 'avaliacoes' },

      ]
    });
    res.json(associados);
  },
  async store(req, res) {
    const { pessoa_id } = req.params;
    const { cargo_id, gestor_id, atividades_id, avaliacoes_id, conhecimentos_id, matricula, data_admissao, termino_contrato, email, cr, name_empresa, tel_empresa, curso, periodo } = req.body;
    const pessoa = await Pessoas.findByPk(pessoa_id);

    if (!pessoa) {
      res.status(404).json({ error: 'Pessoa not found' });
    }
    console.table({ pessoa_id, cargo_id, gestor_id, atividades_id, avaliacoes_id, conhecimentos_id, matricula, data_admissao, termino_contrato, email, cr, name_empresa, tel_empresa, curso, periodo });
    const asscociado = await Associados.create({ pessoa_id, cargo_id, gestor_id, atividades_id, avaliacoes_id, conhecimentos_id, matricula, data_admissao, termino_contrato, email, cr, name_empresa, tel_empresa, curso, periodo });
    res.json(asscociado);
  }
}