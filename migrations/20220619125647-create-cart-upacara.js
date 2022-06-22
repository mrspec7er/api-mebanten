'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cart_Upacaras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      banten_id: {
        type: Sequelize.INTEGER
      },
      choices_date: {
        type: Sequelize.DATE
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      payment_status: {
        type: Sequelize.STRING
      },
      payment_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cart_Upacaras');
  }
};