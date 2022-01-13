'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('ExternalLinks', [
      {
        isPrimary: true,
        primaryLabel: 'yay label',
        url: 'facebook.com',
        userId: null,
        companyId: 3,
        eventId: null
      },
      {
        isPrimary: false,
        primaryLabel: 'yay label',
        url: 'facebook.com',
        userId: null,
        companyId: 3,
        eventId: null
      },
      {
        isPrimary: false,
        primaryLabel: 'yay label',
        url: 'twitter.com',
        userId: null,
        companyId: 3,
        eventId: null
      },
      {
        isPrimary: false,
        primaryLabel: 'yay label',
        url: 'linkedin.com',
        userId: null,
        companyId: 3,
        eventId: null
      },
      {
        isPrimary: false,
        primaryLabel: 'yay label',
        url: 'angel.com',
        userId: null,
        companyId: 3,
        eventId: null
      },
      {
        isPrimary: false,
        primaryLabel: 'yay label',
        url: 'tiktok.com',
        userId: null,
        companyId: 3,
        eventId: null
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('EventTags', null, {});
  }
};
