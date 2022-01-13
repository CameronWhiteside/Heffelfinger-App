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
        references: { model: 'Users' },
        // onDelete: 'CASACADE'
      },
      companyId: {
        type: Sequelize.INTEGER,
        references: { model: 'Companies' },
        // onDelete: 'CASACADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Events' },
        // onDelete: 'CASACADE'
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
