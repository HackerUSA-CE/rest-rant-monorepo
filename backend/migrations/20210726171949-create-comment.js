'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.DataTypes.STRING
    })
  },
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      place_id: {
        type: Sequelize.SMALLINT
      },
      stars: {
        type: Sequelize.FLOAT
      },
      content: {
        type: Sequelize.STRING
      },
      rant: {
        type: Sequelize.BOOLEAN
      },
      author_id: {
        type: Sequelize.SMALLINT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
  },
  down; async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'password_digest')
  }
