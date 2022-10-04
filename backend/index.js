// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const cookieSession = require('cookie-session')
const defineCurrentUser = require('./middleware/defineCurrentUser')

// Express Settings
<<<<<<< HEAD
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/authentication", require("./controllers/authentication"));
=======
app.use(cookieSession({
    name: 'session',
    keys: [ process.env.SESSION_SECRET ],
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentUser)

>>>>>>> origin/9.3.12-solution-session
// Controllers & Routes

app.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
app.use("/places", require("./controllers/places"));
app.use("/users", require("./controllers/users"));
=======
app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))
>>>>>>> origin/9.3.12-solution-session

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
