const express = require("express");

const AvaliacaoController = require('./controllers/AvaliacaoController');
const CargoController = require('./controllers/CargoController');
const ConhecimentoController = require('./controllers/ConhecimentoController');
const AtividadeController = require('./controllers/AtividadeController')
const GestorController = require('./controllers/GestorController')
const PessoaController = require('./controllers/PessoaController')

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


routes.get('/', (req, res) => {
  res.send("OK");
})


module.exports = routes;