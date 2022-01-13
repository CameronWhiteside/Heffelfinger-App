'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExternalLinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isPrimary: {
        type: Sequelize.BOOLEAN,
      },
      primaryLabel: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING(500),
      },
      eventId: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: {model: 'Companies'}
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: 'Events'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ExternalLinks');
  }
};
