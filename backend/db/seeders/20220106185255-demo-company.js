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
        logo: 'https://i.ibb.co/4FSBBv1/aircnd-logo-with-background.png'
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
        logo: 'https://i.ibb.co/L5pyC7X/recipeoplelogo.jpg'
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
        logo: 'https://i.ibb.co/nR149gr/heff-site-logo.png'
      },
      {
        name: 'Carpe Diem',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/Q86yqd2/carpediem-logo.jpg'
      },
      {
        name: 'SpareBnB',
        description: 'sampleDescription',
        location: 'sampleCity',
        tagline: 'sampleTagline sampleTagline',
        logo: 'https://i.ibb.co/wBypLXM/Logo.jpg'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
