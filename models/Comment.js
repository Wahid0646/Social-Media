const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('comment', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Comment;
