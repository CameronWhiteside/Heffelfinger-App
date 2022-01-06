'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserRoles', [
        {
          userId: 1,
          roleId: 1
        },
        {
          userId: 2,
          roleId: 2
        },
        {
          userId: 3,
          roleId: 3
        },
        {
          userId: 5,
          roleId: 1
        },
        {
          userId: 4,
          roleId: 1
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
