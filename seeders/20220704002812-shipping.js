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
     await queryInterface.bulkInsert('Shippings', [
      {
        district_id: 1,
        banten_id: 1,
        shipping_cost: 5000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 1,
        banten_id: 2,
        shipping_cost: 7000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 1,
        banten_id: 3,
        shipping_cost: 3000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 1,
        banten_id: 4,
        shipping_cost: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 1,
        banten_id: 5,
        shipping_cost: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 2,
        banten_id: 1,
        shipping_cost: 15000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 2,
        banten_id: 2,
        shipping_cost: 17000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 2,
        banten_id: 3,
        shipping_cost: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 2,
        banten_id: 4,
        shipping_cost: 12000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district_id: 2,
        banten_id: 5,
        shipping_cost: 11000,
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
     await queryInterface.bulkDelete('Shippings', null, {restartIdentity: true});
  }
};
