module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    orderNfId: DataTypes.STRING,
  })

  order.associate = (models) => {
    order.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId', as: 'cnpj'
    });
    order.belongsTo(models.provider, {
      foreignKey: 'providerId', as: 'provider'
    });
    order.belongsTo(models.buyer, {
      foreignKey: 'buyerId', as: 'buyer'
    });
    order.belongsTo(models.user, {
      foreignKey: 'userId', as: 'user'
    })
  }

  return order;
}