const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Comment = require('./Comment');

const Post = sequelize.define('post', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Post.hasMany(Comment, { as: 'comments' });

module.exports = Post;
