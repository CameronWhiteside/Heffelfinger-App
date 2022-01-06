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
    await queryInterface.bulkInsert('EventTags', [
      {
        eventId: 1,
        tagId: 1
      },
      {
        eventId: 1,
        tagId: 2
      },
      {
        eventId: 1,
        tagId: 3
      },
      {
        eventId: 1,
        tagId: 4
      },
      {
        eventId: 2,
        tagId: 5
      },
      {
        eventId: 2,
        tagId: 6
      },
      {
        eventId: 2,
        tagId: 7
      },
      {
        eventId: 3,
        tagId: 8
      },
      {
        eventId: 3,
        tagId: 1
      },
      {
        eventId: 3,
        tagId: 5
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('EventTags', null, {});
  }
};
