const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rest_rant_auth', 'myuser', '', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
