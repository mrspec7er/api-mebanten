"use strict";

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
    await queryInterface.bulkInsert(
      "Abouts",
      [
        {
          img: "/v1/get-profile/instagram.jpg",
          name: "Sosmed",
          url: "https://www.instagram.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/v1/get-profile/wa-chat.jpg",
          name: "WA Konsultasi",
          url: "https://web.whatsapp.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          img: "/v1/get-profile/wa-help.jpg",
          name: "WA Bantuan",
          url: "https://web.whatsapp.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Abouts", null, { restartIdentity: true });
  },
};
