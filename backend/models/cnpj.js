module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpj', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
  },
  )

  cnpj.associate = (models) => {
    cnpj.hasMany(models.provider, {
      foreignKey: 'cnpjId', as: 'cedente'
    });
    cnpj.hasMany(models.buyer, {
      foreignKey: 'cnpjId', as: 'sacado'
    });
    cnpj.hasMany(models.order, {
      foreignKey: 'cnpjId', as: 'pedido'
    });
    cnpj.hasMany(models.sponsor, {
      foreignKey: 'cnpjId', as: 'patrocinio'
    })
  }

  return cnpj;
};
