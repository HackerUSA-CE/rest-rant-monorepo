"use strict";
const { Model } = require("sequelize");
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
    role: {
      type: DataTypes.ENUM,
      values: [
        'reviewer',
        'admin',
      ],
    },
    passwordDigest: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
>>>>>>> origin/9.3.12-solution-session
  return User;
};
