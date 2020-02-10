const { Model, DataTypes } = require('sequelize');

class conhecimentos extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = conhecimentos;