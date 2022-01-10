'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demoguest@demo.com',
        firstName: 'Demoguest',
        lastName: 'Demoguest',
        hashedPassword: bcrypt.hashSync('guest'),
      },
      {
        email: 'demomember@demo.com',
        firstName: 'Demomember',
        lastName: 'Demomember',
        hashedPassword: bcrypt.hashSync('member'),
      },
      {
        email: 'demoadmin@demo.com',
        firstName: 'Demoadmin',
        lastName: 'Demoadmin',
        hashedPassword: bcrypt.hashSync('admin'),
      },
      {
        email: 'whiteside.cameron@gmail.com',
        firstName: 'Cameron',
        lastName: 'Whiteside',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'reallyHarryTruman@bing.com',
        firstName: 'Harry',
        lastName: 'Truman',
        hashedPassword: bcrypt.hashSync('theSStandsForS!!!'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
