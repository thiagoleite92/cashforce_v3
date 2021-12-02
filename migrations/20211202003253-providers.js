'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('providers', {
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
      tradingName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      cashforceTax: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      responsibleName: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      responsibleEmail: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      responsiblePosition: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      responsiblePhone: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      responsibleMobile: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      website: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      postalCode: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      number: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      complement: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      neighborhood: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      city: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      state: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      bank: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      bankAgency: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      account: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      documents: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      situation: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      situationDate: {
        type: Sequelize.STRING,
        defaultValue: null,
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
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('providers')
  }
};
