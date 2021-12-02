'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      orderNfId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      orderFileName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      emissionDate: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      pdfFile: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      CTE: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      value: {
        type: Sequelize.STRING,
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
      cnpjId: {
        type: Sequelize.INTEGER,
        field: 'cnpjId',
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'userId',
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      buyerId: {
        type: Sequelize.INTEGER,
        field: 'buyerId',
        references: {
          model: 'buyers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      providerId: {
        type: Sequelize.INTEGER,
        field: 'providerId',
        references: {
          model: 'providers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
      },
      orderStatusBuyer: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
