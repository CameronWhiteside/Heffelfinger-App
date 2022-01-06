'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        website: faker.internet.url(),
        logo: faker.image.imageUrl()
      },
      {
        name: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        website: faker.internet.url(),
        logo: faker.image.imageUrl()
      },
      {
        name: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        website: faker.internet.url(),
        logo: faker.image.imageUrl()
      },
      {
        name: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        website: faker.internet.url(),
        logo: faker.image.imageUrl()
      },
      {
        name: faker.company.companyName(),
        description: faker.company.catchPhrase(),
        website: faker.internet.url(),
        logo: faker.image.imageUrl()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
