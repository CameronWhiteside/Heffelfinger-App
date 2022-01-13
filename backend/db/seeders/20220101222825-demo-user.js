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
        biography: 'Sample Bio Sample Bio',
        location: 'Sample Location',

      },
      {
        email: 'demomember@demo.com',
        firstName: 'Demomember',
        lastName: 'Demomember',
        hashedPassword: bcrypt.hashSync('member'),
        biography: 'Sample Bio Sample Bio',
        location:'Sample Location'
      },
      {
        email: 'demoadmin@demo.com',
        firstName: 'Demoadmin',
        lastName: 'Demoadmin',
        hashedPassword: bcrypt.hashSync('admin'),
        biography: 'Sample Bio Sample Bio',
        location:'Sample Location'
      },
      {
        email: 'whiteside.cameron@gmail.com',
        firstName: 'Cameron',
        lastName: 'Whiteside',
        hashedPassword: bcrypt.hashSync('password'),
        biography: 'Sample Bio Sample Bio',
        location: 'Sample Location',
        imageUrl: 'https://i.ibb.co/k5Kc5dV/600-px-oxley-logo.jpg'
      },
      {
        email: 'reallyHarryTruman@bing.com',
        firstName: 'Harry',
        lastName: 'Truman',
        hashedPassword: bcrypt.hashSync('theSStandsForS!!!'),
        biography: 'Sample Bio Sample Bio',
        location:'Sample Location'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', null, {});
  }
};
