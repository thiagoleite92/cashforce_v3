'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('buyers', {
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
      situation: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      situationDate: {
        type: Sequelize.STRING,
        defaultValue: null,
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
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updateAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('buyers')
  }
};
