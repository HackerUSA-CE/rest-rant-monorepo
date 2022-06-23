'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'password_digest',
      {
          type: Sequelize.DataTypes.STRING,
      }
    )
    },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password_digest')
  }
};
