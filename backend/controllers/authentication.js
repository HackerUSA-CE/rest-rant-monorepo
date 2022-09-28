const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

// login
router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    // console.log(user)

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({
            message: `Could not find a user with the provided username and password`
        })
    } else {
        // successfully logged in
        req.session.userId = user.userId
        res.status(200).json({ user })
    }
})

// get current user
router.get('/profile', async (req, res) => {
    // console.log(req.session.userId)

    try {
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})

module.exports = router


 





 
 

  
