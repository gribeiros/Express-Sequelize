const express = require("express");

const AvaliacaoController = require('./controllers/AvaliacaoController');


const routes = express.Router();

routes.get('/avaliacoes', AvaliacaoController.index)
routes.post('/avaliacoes', AvaliacaoController.store);


routes.get('/', (req, res) => {
  res.send("OK");
})


module.exports = routes;