'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees', [
      {
        userId: 1,
        companyId: 1,
        companyRoleId: 1
      },
      {
        userId: 2,
        companyId: 1,
        companyRoleId: 3
      },
      {
        userId: 3,
        companyId: 1,
        companyRoleId: 3
      },
      {
        userId: 5,
        companyId: 2,
        companyRoleId: 2
      },
      {
        userId: 4,
        companyId: 3,
        companyRoleId: 2
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Employees', null, {});
  }
};
