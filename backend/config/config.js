require('dotenv').config()

module.exports = {
  "development": {
    "username": "postgres",
    "password": "Password",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port":5433
  },
  "test": {
    "username": "postgres",
    "password": "Password",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port":5433
  },
  "production": {
    "username": "postgres",
    "password": "Password",
    "database": "rest_rant_auth",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port":5433
  }
}
