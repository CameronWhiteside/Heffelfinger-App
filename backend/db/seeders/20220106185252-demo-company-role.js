'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CompanyRoles', [
      {
        role: 'Basic'
      },
      {
        role: 'Event Creator'
      },
      {
        role: 'Admin'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('CompanyRoles', {
      role: { [Op.in]: ['Basic', 'Event Creator', 'Admin'] }
    }, {});
  }
};
