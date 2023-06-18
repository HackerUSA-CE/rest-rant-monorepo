const sequelize = require('../models/database');
const User = require('./user');
const Place = require('./place');
const Comment = require('./comment');

User.associate({ Comment }); // Add this line to establish the association
Place.associate({ Comment }); // Add this line to establish the association

module.exports = {
  User,
  Place,
  Comment,
  sequelize,
};
