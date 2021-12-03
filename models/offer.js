module.exports = (sequelize, DataTypes) => {
  const offer = sequelize.define('offer', {
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paymentStatusSponsor: DataTypes.INTEGER,
    paymentStatusProvider: DataTypes.INTEGER,
    orderId: DataTypes.STRING,
    sponsorId: DataTypes.STRING,
  })

  offer.associate = (models) => {
    offer.belongsTo(models.order, {
      foreignKey: 'orderId', as: 'order',
    });
    offer.belongsTo(models.sponsor, {
      foreignKey: 'sponsorId', as: 'sponsor',
    });
  }

  return offer;
}