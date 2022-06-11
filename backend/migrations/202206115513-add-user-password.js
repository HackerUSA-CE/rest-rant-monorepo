'use strict';

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        return QueryInterface.addColumn('users', 'password-digest', {
            type: Sequelize.dataTypes.STRING
        })
    },
    down: async (QueryInterface, Sequelize) => {
        return QueryInterface.removeColumn('users', 'password-digest')
    } 
};

