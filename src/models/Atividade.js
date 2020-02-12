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
  static associate(models){
    this.hasMany(models.associated, { foreignKey: 'atividades_id', as: 'atividades' });
  }
}

module.exports = atividades;