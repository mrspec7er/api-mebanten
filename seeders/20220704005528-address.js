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
     await queryInterface.bulkInsert('Addresses', [
      {
        user_id: 'GaaPXhfG1CXz8j1SmIIIRgtDrht2',
        address: 'Jl Raya Puputan No 32. Denpasar Selatan, Denpasar',
        kecamatan_id: 1,
        district_id: 1,
        province_id: 1,
        phone: '0922345761',
        desc: 'Sebelah timur puputan',
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
     await queryInterface.bulkDelete('Addresses', null, {restartIdentity: true});
  }
};
