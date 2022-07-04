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
     await queryInterface.bulkInsert('Banten_Upacaras', [
      {
        name: 'Mesakapan',
        griya_id: 1,
        price: 700000,
        min_order_day: 7,
        desc: 'Banten Mesakapan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quia eius architecto voluptate nesciunt quasi quaerat aspernatur velit provident sint, officia, omnis debitis eum temporibus vero minus explicabo. Quas, consequatur',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3l1j25hr1KHbZjsoE-7s1aCl60kIuSaw8w&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Otonan',
        griya_id: 1,
        price: 300000,
        min_order_day: 21,
        desc: 'Banten Otonan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quia eius architecto voluptate nesciunt quasi quaerat aspernatur velit provident sint, officia, omnis debitis eum temporibus vero minus explicabo. Quas, consequatur',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3l1j25hr1KHbZjsoE-7s1aCl60kIuSaw8w&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Metatah',
        griya_id: 5,
        price: 500000,
        min_order_day: 14,
        desc: 'Banten Metatah Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quia eius architecto voluptate nesciunt quasi quaerat aspernatur velit provident sint, officia, omnis debitis eum temporibus vero minus explicabo. Quas, consequatur',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3l1j25hr1KHbZjsoE-7s1aCl60kIuSaw8w&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Telu Bulanan',
        griya_id: 5,
        price: 200000,
        min_order_day: 7,
        desc: 'Banten Telu Bulan Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quia eius architecto voluptate nesciunt quasi quaerat aspernatur velit provident sint, officia, omnis debitis eum temporibus vero minus explicabo. Quas, consequatur',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3l1j25hr1KHbZjsoE-7s1aCl60kIuSaw8w&usqp=CAU',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mebayuh',
        griya_id: 5,
        price: 100000,
        min_order_day: 28,
        desc: 'Banten Mebayuh Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quia eius architecto voluptate nesciunt quasi quaerat aspernatur velit provident sint, officia, omnis debitis eum temporibus vero minus explicabo. Quas, consequatur',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3l1j25hr1KHbZjsoE-7s1aCl60kIuSaw8w&usqp=CAU',
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
     await queryInterface.bulkDelete('Banten_Upacaras', null, {restartIdentity: true});
  }
};
