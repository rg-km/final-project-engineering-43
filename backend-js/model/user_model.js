const { DataTypes } = require('sequelize');
const sequelize = require('../core/database');

const UserModel = sequelize.define('User', {
  id: DataTypes.UUID,
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});
