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
     await queryInterface.bulkInsert('Banten_Options', [
      {
        banten_id: 1,
        name: 'Babi Guling',
        price: 3000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        banten_id: 1,
        name: 'Lawar',
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        banten_id: 1,
        name: 'Kuah Komoh',
        price: 200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        banten_id: 2,
        name: 'Sate Lilit',
        price: 500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        banten_id: 2,
        name: 'Sate Tusuk',
        price: 300000,
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
     await queryInterface.bulkDelete('Banten_Options', null, {restartIdentity: true});
  }
};
