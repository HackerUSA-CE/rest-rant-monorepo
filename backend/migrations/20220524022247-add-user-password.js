'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    /**
     * Add altering commands here.*/
     return queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.DataTypes.STRING
    })
     /* Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    
    /**
     * Add reverting commands here.*/
    return queryInterface.removeColumn('users', 'password_digest')
     /* Example:
     * await queryInterface.dropTable('users');
     */
  }
};
'use strict';

