const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Update the path to the database.js file

class User extends Model {
  static associate(models) {
    User.hasMany(models.Comment, { as: 'author', foreignKey: 'authorId' });
  }
}

User.init(
  {
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password_digest',
    },
  },
  {
    sequelize, // Pass the Sequelize instance here
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;
