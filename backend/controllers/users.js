const router = require('express').Router()
const db = require("../models")
<<<<<<< HEAD
const bcrypt = require('bcrypt')
=======
const bcrypt = require('bcrypt') 
>>>>>>> origin/9.3.10-solution-jwt

const { User } = db

router.post('/', async (req, res) => {
<<<<<<< HEAD
    let { password, ...rest} = req.body;
    const user = await User.create({
        ...rest,
=======
    let { password, ...rest } = req.body;
    const user = await User.create({ 
        ...rest, 
>>>>>>> origin/9.3.10-solution-jwt
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router