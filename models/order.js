module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
  });

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