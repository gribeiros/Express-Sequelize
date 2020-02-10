const { Model, DataTypes } = require('sequelize');

class gestores extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      matricula: DataTypes.STRING,
      email: DataTypes.INTEGER,
      telefone: DataTypes.INTEGER
    }, {
      sequelize
    })
  }
}

module.exports = gestores;