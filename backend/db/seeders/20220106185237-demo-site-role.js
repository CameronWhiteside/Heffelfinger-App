'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SiteRoles', [
      {
        role: 'Guest'
      },
      {
        role: 'Member'
      },
      {
        role: 'Admin'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('SiteRoles', {
      role: { [Op.in]: ['Guest', 'Member', 'admin'] }
    }, {});
  }
};
