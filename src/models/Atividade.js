const { Model, DataTypes } = require('sequelize');

class atividades extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      descri: DataTypes.STRING,
      name_responsible: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = atividades;