module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpj', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  )

  cnpj.associate = (models) => {
    cnpj.hasMany(models.provider, {
      foreignKey: 'cnpjId', as: 'provider'
    });
    cnpj.hasMany(models.buyer, {
      foreignKey: 'cnpjId', as: 'buyer'
    });
    cnpj.hasMany(models.order, {
      foreignKey: 'cnpjId', as: 'order'
    });
    cnpj.hasMany(models.sponsor, {
      foreignKey: 'cnpjId', as: 'sponsor'
    })
  }

  return cnpj;
};
