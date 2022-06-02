// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser')

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))
<<<<<<< HEAD
app.use('/authenticate', require('./controllers/authenticate'))
=======
app.use('/authentication', require('./controllers/authentication'))
>>>>>>> origin/9.3.10-solution-jwt

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})