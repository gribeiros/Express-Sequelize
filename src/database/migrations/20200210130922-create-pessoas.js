'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_nasc: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
      },
      celular: {
        type: Sequelize.STRING(11),
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pessoas')
  }
};
