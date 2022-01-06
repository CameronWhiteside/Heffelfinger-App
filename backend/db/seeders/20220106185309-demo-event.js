'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
      {
        name: faker.animal.dog(),
        startDateTime: faker.date.future(),
        endDateTime: faker.date.future(),
        description: faker.company.catchPhrase(),
        meetingLink: faker.internet.url(),
        hostId: 1,
      },
      {
        name: faker.animal.cetacean(),
        startDateTime: faker.date.future(),
        endDateTime: faker.date.future(),
        description: faker.company.catchPhrase(),
        meetingLink: faker.internet.url(),
        hostId: 2,
      },
      {
        name: faker.animal.lion(),
        startDateTime: faker.date.future(),
        endDateTime: faker.date.future(),
        description: faker.company.catchPhrase(),
        meetingLink: faker.internet.url(),
        hostId: 3,
      },
    ])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
