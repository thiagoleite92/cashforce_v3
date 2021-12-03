module.exports = (sequelize, DataTypes) => {
  const buyer = sequelize.define('buyer', {
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
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: DataTypes.INTEGER,
    confirm: DataTypes.INTEGER,
    email: DataTypes.STRING,
  })

  buyer.associate = (models) => {
    buyer.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId', as: 'cnpj',
    });
  };

  buyer.associate = (models) => {
    buyer.hasMany(models.order, {
      foreignKey: 'buyerId', as: 'buyer',
    })
  };

  return buyer
}