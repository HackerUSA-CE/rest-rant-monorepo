// Modules and Globals
require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express();

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})