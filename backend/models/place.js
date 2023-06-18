'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database'); // Update the path to the database.js file

class Place extends Model {
  static associate(models) {
    Place.hasMany(models.Comment, { foreignKey: 'placeId', as: 'comments' });
  }
}

Place.init(
  {
    placeId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    cuisines: DataTypes.STRING,
    pic: DataTypes.STRING,
    founded: DataTypes.INTEGER,
  },
  {
    sequelize, // Pass the Sequelize instance here
    underscored: true,
    modelName: 'Place',
  }
);

module.exports = Place;

