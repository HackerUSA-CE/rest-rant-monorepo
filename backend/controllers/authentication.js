const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        req.session.userId = user.userId
        console.log('session user:', req.session.userId)
        res.json({ user })                                       
    }
})

router.get('/profile', async (req, res) => {
    console.log('##log request##', req.session.userId)
    try {
        let user = await User.findOne({
            where: {
                userId: req.session.userId                    
            }
        })
        console.log("## user: ",user)
        res.json(user)
    } catch {
        res.json(null)
    }
})

router.post('/super-important-route', async (req, res) => {
    if(req.session.userId){
        console.log('Do the really super important thing')
        res.send('Done')
    } else {
        console.log('You are not authorized to do the super important thing')
        res.send('Denied')
    }
})




module.exports = router


