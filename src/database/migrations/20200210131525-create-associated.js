'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('associateds', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pessoas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cargo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cargos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      gestor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'gestores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      atividades_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'atividades', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      avaliacoes_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'avaliacoes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      conhecimentos_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'conhecimentos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_admissao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      termino_contrato: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cr: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel_empresa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      curso: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      periodo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('associated')
  }
};
