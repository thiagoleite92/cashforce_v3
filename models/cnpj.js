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
      foreignKey: 'cnpjId', as: 'CNPJ'
    })
  }

  return cnpj;
};
