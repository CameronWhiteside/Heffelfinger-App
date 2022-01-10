'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'AirCnD',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/BgBRsvf/placeholder2.jpg'
      },
      {
        name: 'Gotta Latte Do',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/zPF1bz6/gotta-latte-do.jpg'
      },
      {
        name: 'Recipeople',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/qMqtCbR/recipeople.jpg'
      },
      {
        name: 'Heffelfinger Business Studios',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/BgBRsvf/placeholder2.jpg'
      },

      {
        name: 'Inkr',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://cdn.discordapp.com/attachments/909939496378855424/929132224836677652/black-and-white.png'
      },
      {
        name: 'Carpe Diem',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/9G6LLCQ/logo-sq-plain.jpg'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
