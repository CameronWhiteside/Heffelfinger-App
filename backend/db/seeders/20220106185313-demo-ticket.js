'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        eventId: 1,
        userId: 1
      },
      {
        eventId: 1,
        userId: 2
      },
      {
        eventId: 1,
        userId: 3
      },
      {
        eventId: 1,
        userId: 4
      },
      {
        eventId: 2,
        userId: 2
      },
      {
        eventId: 2,
        userId: 4
      },
      {
        eventId: 2,
        userId: 5
      },
      {
        eventId: 3,
        userId: 1
      },
      {
        eventId: 3,
        userId: 3
      },
      {
        eventId: 3,
        userId: 5
      },
    ])

  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Tickets', null, {});
  }
};
