"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment }) {
      User.hasMany(Comment, { as: "author", foreignKey: "author_id" });
    }
  }
  User.init(
    {
      userId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
    },
<<<<<<< HEAD
    {
      sequelize,
      underscored: true,
      modelName: "User",
    }
  );
=======
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
>>>>>>> origin/9.3.4-solution
  return User;
};
