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
  static associate(models) {
    this.hasMany(models.associated, { foreignKey: 'avaliacoes_id', as: 'avaliacoes' });
  }
}

module.exports = avaliacoes;