module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.INTEGER,
    cashforceAdm: DataTypes.INTEGER,
  })

  user.associate = (models) => {
    user.hasMany(models.order, {
      foreignKey: 'userId', as: 'order'
    });
  }

  return user;
};