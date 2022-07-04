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
     await queryInterface.bulkInsert('Griyas', [
      {
        name: 'Griya Klungkung',
        district_id: 1,
        desc: 'Griya klungkung Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempore beatae porro, quas vero ab asperiores quam omnis enim, saepe officiis quibusdam? Omnis, necessitatibus? Illum quis neque nostrum iusto voluptatem.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Griya Mengwi',
        district_id: 1,
        desc: 'Griya Mengwi Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempore beatae porro, quas vero ab asperiores quam omnis enim, saepe officiis quibusdam? Omnis, necessitatibus? Illum quis neque nostrum iusto voluptatem.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Griya Pemecutan',
        district_id: 1,
        desc: 'Griya Pemecutan Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempore beatae porro, quas vero ab asperiores quam omnis enim, saepe officiis quibusdam? Omnis, necessitatibus? Illum quis neque nostrum iusto voluptatem.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Griya Singaraja',
        district_id: 2,
        desc: 'Griya Singaraja Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempore beatae porro, quas vero ab asperiores quam omnis enim, saepe officiis quibusdam? Omnis, necessitatibus? Illum quis neque nostrum iusto voluptatem.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Griya Pasek',
        district_id: 2,
        desc: 'Griya Pasek Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempore beatae porro, quas vero ab asperiores quam omnis enim, saepe officiis quibusdam? Omnis, necessitatibus? Illum quis neque nostrum iusto voluptatem.',
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
     await queryInterface.bulkDelete('Griyas', null, {restartIdentity: true});
  }
};
