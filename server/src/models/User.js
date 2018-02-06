module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true // can't have two of the same email
    },
    password: DataTypes.STRING
  })
