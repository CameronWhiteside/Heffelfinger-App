'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tags',[
      { name: 'Marketing' },
      { name: 'Leadership' },
      { name: 'Hiring' },
      { name: 'Finance' },
      { name: 'Supply Chain' },
      { name: 'Entrepreneurship' },
      { name: 'Engineering' },
      { name: 'Just For Fun' },
    ])
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Tags', null, {});
  }
};
