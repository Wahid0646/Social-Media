const Sequelize = require('sequelize');

const sequelize = new Sequelize('instagram', 'root', 'Wahid@0646', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
