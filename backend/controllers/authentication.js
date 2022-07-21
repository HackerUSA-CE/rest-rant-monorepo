const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

  
  // authenticates a user by checking the provided password against the hashed password in the database
router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password`
            
        })
        console.log('couldn\'t log in')
    } else {
        res.json({ user })
    }
})

  


module.exports = router
