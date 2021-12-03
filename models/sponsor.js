module.exports = (sequelize, DataTypes) => {
  const sponsor = sequelize.define('sponsor', {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  sponsor.associate = (models) => {
    sponsor.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId', as: 'cnpj',
    });
  };

  return sponsor;
}