const { Model, DataTypes } = require('sequelize');

class associated extends Model {
  static init(sequelize) {
    super.init({
      matricula: DataTypes.STRING,
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
  static associate(models) {
    this.belongsTo(models.pessoas, { foreignKey: 'pessoa_id', as: 'pessoa' });
    this.belongsTo(models.cargos, { foreignKey: 'cargo_id', as: 'cargo' });
    this.belongsTo(models.gestores, { foreignKey: 'gestor_id', as: 'gestor' });
    this.belongsTo(models.atividades, { foreignKey: 'atividades_id', as: 'atividades' });
    this.belongsTo(models.avaliacoes, { foreignKey: 'avaliacoes_id', as: 'avaliacoes' });
    this.belongsTo(models.conhecimentos, { foreignKey: 'conhecimentos_id', as: 'conhecimentos' });
  }
}

module.exports = associated;