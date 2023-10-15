'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.STRING, // Adjust the data type if needed
      allowNull: true, // Modify as needed
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'password_digest');
  }
};
