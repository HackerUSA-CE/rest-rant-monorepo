require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "Get-SQL@13021!",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Get-SQL@13021!",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

