// Modules and Globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); // Import sequelize

const app = express();

// Express Settings
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Sequelize and establish database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Controllers & Routes
app.use('/places', require('./controllers/places'));
app.use('/users', require('./controllers/users'));
app.use('/authentication', require('./controllers/authentication'));

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
