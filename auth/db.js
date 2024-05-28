const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("tcc", "rian", "ribud123", {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

module.exports = sequelize;
