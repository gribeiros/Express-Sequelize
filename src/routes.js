const express = require("express");

const AvaliacaoController = require('./controllers/AvaliacaoController');
const CargoController = require('./controllers/CargoController');
const ConhecimentoController = require('./controllers/ConhecimentoController');
const AtividadeController = require('./controllers/AtividadeController')
const GestorController = require('./controllers/GestorController')
const PessoaController = require('./controllers/PessoaController')
const AssociadoController = require('./controllers/AsssociadoController');

const routes = express.Router();

routes.get('/avaliacoes', AvaliacaoController.index);
routes.post('/avaliacoes', AvaliacaoController.store);

routes.get('/cargos', CargoController.index);
routes.post('/cargos', CargoController.store);

routes.get('/conhecimentos', ConhecimentoController.index);
routes.post('/conhecimentos', ConhecimentoController.store);

routes.get('/atividades', AtividadeController.index);
routes.post('/atividades', AtividadeController.store);

routes.get('/gestores', GestorController.index);
routes.post('/gestores', GestorController.store);

routes.get('/pessoas', PessoaController.index);
routes.post('/pessoas', PessoaController.store);

routes.get('/associados', AssociadoController.index);
routes.post('/pessoas/:pessoa_id/associados', AssociadoController.store);

routes.get('/', (req, res) => {
  res.json({ MyCreator: 'Gustavo R. Silva' });
})


module.exports = routes;