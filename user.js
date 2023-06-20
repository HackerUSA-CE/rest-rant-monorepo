const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
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
    role: {
      type: DataTypes.ENUM,
      values: ['reviewer', 'admin'],
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password_digest',
    },
    password: {
      type: DataTypes.VIRTUAL,
    },
  },
  {
    sequelize,
    underscored: true,
    modelName: 'User',
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(user.password, saltRounds);
          user.passwordDigest = hashedPassword;
        }
      },
    },
  }
);

module.exports = User;
