const { Model, DataTypes } = require('sequelize');

class associated extends Model {
  static init(sequelize) {
    super.init({
      mastricula: DataTypes.STRING,
      data_admissao: DataTypes.DATE,
      termino_contrato: DataTypes.DATE,
      email: DataTypes.STRING,
      cr: DataTypes.STRING,
      name_empresa: DataTypes.STRING,
      tel_empresa: DataTypes.STRING,
      curso: DataTypes.STRING,
      periodo: DataTypes.INTEGER
    },
      {
        sequelize
      })
  }
  static associate(model) {
    this.belongsTo(model.Pessoa, { foreignKey: 'id', as: 'pessoa_id' });
    this.belongsTo(model.Cargo, { foreignKey: 'id', as: 'cargo_id' });
    this.belongsTo(model.Gestor, { foreignKey: 'id', as: 'gestor_id' });
    this.belongsTo(model.Atividade, { foreignKey: 'id', as: 'atividades_id' });
    this.belongsTo(model.Avalicao, { foreignKey: 'id', as: 'avalicoes_id' });
    this.belongsTo(model.Conhecimento, { foreignKey: 'id', as: 'conhecimentos_id' })
  }
}

module.exports = associated;