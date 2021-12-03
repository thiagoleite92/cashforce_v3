module.exports = (sequelize, DataTypes) => {
  const orderportion = sequelize.define('orderportion', {
    nDup: DataTypes.STRING,
    dVenc: DataTypes.STRING,
    vDup: DataTypes.STRING,
    availableToMarket: DataTypes.INTEGER,
  });

  orderportion.associate = (models) => {
    orderportion.belongsTo(models.order, {
      foreignKey: 'orderId', as: 'order'
    })
  };

  return orderportion

}