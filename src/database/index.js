const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Avalicao = require('../models/Avaliacao');
const Cargo = require('../models/Cargo');
const Conhecimento = require('../models/Conhecimento');
const Atividade = require('../models/Atividade');
const Gestor = require('../models/Gestor');
const Pessoa = require('../models/Pessoa');
const Associado = require('../models/Associado');

const models = { Avalicao, Cargo, Conhecimento, Atividade, Gestor, Pessoa, Associado };

const connection = new Sequelize(dbConfig);

Avalicao.init(connection);
Cargo.init(connection);
Conhecimento.init(connection);
Atividade.init(connection);
Gestor.init(connection);
Pessoa.init(connection);
Associado.init(connection);

Associado.associate(connection.models);
Atividade.associate(connection.models);
Avalicao.associate(connection.models);
Conhecimento.associate(connection.models);

module.exports = connection;