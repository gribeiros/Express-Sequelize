const { Model, DataTypes } = require('sequelize');

class pessoas extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      date_nasc: DataTypes.DATE,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING,
      celular: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = pessoas;