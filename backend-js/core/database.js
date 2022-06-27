const { Sequelize } = require('sequelize');

const sequilze = new Sequelize({
  dialect: 'sqlite',
  storage: 'database/database.sqlite',
});

module.exports = sequilze;
