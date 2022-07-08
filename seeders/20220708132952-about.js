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
     await queryInterface.bulkInsert('Abouts', [
      {
        img: 'https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN',
        url: 'https://www.web.whatsapp.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg',
        url: 'https://www.instagram.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'https://help.twitter.com/content/dam/help-twitter/brand/logo.png',
        url: 'https://www.twitter.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Abouts', null, {restartIdentity: true});
  }
};
