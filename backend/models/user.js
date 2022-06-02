'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Comment }) {
      User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    }

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
<<<<<<< HEAD
    passwordDigest: DataTypes.STRING,
=======
    passwordDigest: DataTypes.STRING
>>>>>>> origin/9.3.10-solution-jwt
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};