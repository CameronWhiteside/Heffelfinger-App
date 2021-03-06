'use strict';
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'AirCnD',
        description: 'sampleDescription',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/4FSBBv1/aircnd-imageUrl-with-background.png'
      },
      {
        name: 'Gotta Latte Do',
        description: 'sampleDescription',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/zPF1bz6/gotta-latte-do.jpg'
      },
      {
        name: 'Recipeople',
        description: 'sampleDescription',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/L5pyC7X/recipeopleimageUrl.jpg'
      },
      {
        name: 'Heffelfinger Business Studios',
        description: 'sampleDescription',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/BgBRsvf/placeholder2.jpg'
      },

      {
        name: 'Inkr',
        description: 'sampleDescription',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/nR149gr/heff-site-imageUrl.png'
      },
      {
        name: 'Carpe Diem',
        description: 'sampleDescription',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/Q86yqd2/carpediem-imageUrl.jpg'
      },
      {
        name: 'SpareBnB',
        description: 'Combine butter, honey, orange zest, and cardamom in a bowl. Remove 1 tablespoon of the sauce to a separate bowl and set aside. Add carrots to the remaining sauce and toss until all are well coated. Transfer carrots to the air fryer basket.',
        location: 'sampleCity',
        headline: 'sampleHeadline sampleHeadline',
        imageUrl: 'https://i.ibb.co/wBypLXM/imageUrl.jpg'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
