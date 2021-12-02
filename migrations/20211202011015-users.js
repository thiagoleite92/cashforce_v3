'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
       defaultValue: null,
      },
      mobile: {
        type: Sequelize.STRING,
       defaultValue: null,
      },
      departament: {
        type: Sequelize.STRING,
       defaultValue: null,
      },
      verificationCode: {
        type: Sequelize.STRING,
       defaultValue: null,
      },
      emailChecked: {
        type: Sequelize.INTEGER,
       defaultValue: null,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cashforceAdm: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
