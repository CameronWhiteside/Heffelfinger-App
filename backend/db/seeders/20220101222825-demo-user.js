'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demoguest@demo.com',
        username: 'demoguest',
        hashedPassword: bcrypt.hashSync('guest'),
      },
      {
        email: 'demomember@demo.com',
        username: 'demomember',
        hashedPassword: bcrypt.hashSync('member'),
      },
      {
        email: 'demoadmin@demo.com',
        username: 'demoadmin',
        hashedPassword: bcrypt.hashSync('admin'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoUser', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
