module.exports = (sequelize, DataTypes) => {
  const cnpj = sequelize.define('cnpj', {
    cnpj: DataTypes.STRING,
    companyType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  )

  return cnpj;
};
