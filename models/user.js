module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
  })

  user.associate = (models) => {
    user.hasMany(models.order, {
      foreignKey: 'userId', as: 'order'
    });
  }

  return user;
};