'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      tax: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tariff: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adValorem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      float: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iof: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      paymentStatusProvider: {
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
      orderId: {
        type: Sequelize.INTEGER,
        field: 'orderId',
        references: {
          model: 'orders',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        field: 'sponsorId',
        references: {
          model: 'sponsors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('offers');
  }
};
