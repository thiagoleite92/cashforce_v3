module.exports = (sequelize, DataTypes) => {
  const sponsor = sequelize.define('sponsor', {
    name: DataTypes.STRING,
  });

  sponsor.associate = (models) => {
    sponsor.belongsTo(models.cnpj, {
      foreignKey: 'cnpjId', as: 'cnpj',
    });
  };

  return sponsor;
}