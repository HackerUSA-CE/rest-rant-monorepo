const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

const { User } = db

  
router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({
            message: `could not find user`
        })
    }else {
        const result = await jwt.encode(process.env.JWT_SECRET, {id: user.userId})
        res.json({user: user, token: result.value})
    }

    console.log(user)
})
  
router.get('/profile', async (req, res) => {
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')
        if (authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            const {id} = result.value
            let user = await User.findOne({
            where: {
                userId: id  
            }
        })
        res.json(user)
        } 
    } catch {
        res.json(null)
    }
})


module.exports = router
