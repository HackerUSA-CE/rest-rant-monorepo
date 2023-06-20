'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Update the path to the database.js file

class Comment extends Model {
  static associate(models) {
    Comment.belongsTo(models.Place, { as: 'place', foreignKey: 'placeId' });
    Comment.belongsTo(models.User, { as: 'author', foreignKey: 'authorId' });
  }
}

Comment.init(
  {
    commentId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    placeId: DataTypes.SMALLINT,
    authorId: DataTypes.SMALLINT,
    content: DataTypes.STRING,
    stars: DataTypes.FLOAT,
    rant: DataTypes.BOOLEAN,
  },
  {
    sequelize, // Pass the Sequelize instance here
    underscored: true,
    modelName: 'Comment',
  }
);

module.exports = Comment;
