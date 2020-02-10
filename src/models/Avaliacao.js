const { Model, DataTypes } = require('sequelize');

class avaliacoes extends Model {
  static init(sequelize) {
    super.init({
      descri: DataTypes.STRING
    },
      {
        sequelize,
      })
  }
}

module.exports = avaliacoes;