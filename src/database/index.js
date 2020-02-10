const Sequelize = require("sequelize");
const dbConfig = require("../config/database")

const Avalicao = require('../models/Avaliacao')

const connection = new Sequelize(dbConfig);

Avalicao.init(connection);

module.exports = connection;