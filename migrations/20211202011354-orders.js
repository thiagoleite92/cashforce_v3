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
      orderNfld: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      orderPath: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderFileName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orderOriginalName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emissionDate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pdfFile: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      emitedTo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nNf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CTE: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updateAt: {
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
        allowNull: true,
      },
      orderStatusProvider: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryReceipt: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cargoPackingList: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      deliveryCtrc: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};
