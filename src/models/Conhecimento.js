const { Model, DataTypes } = require('sequelize');

class conhecimentos extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize
    })
  }
  static associate(models){
    this.hasMany(models.associated, { foreignKey: 'conhecimentos_id', as: 'conhecimentos' })
  }
}

module.exports = conhecimentos;