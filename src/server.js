const express = require("express");
const routes = require("./routes")

require('./database');

const app = express();

const port = 8030;

app.use(express.json());
app.use(routes);


app.listen(port);
console.log('Rodando na porta: ' + port);