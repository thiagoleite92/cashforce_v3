'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderportions', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      nDup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dVenc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vDup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      availableToMarket: {
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderportions')
  }
};
