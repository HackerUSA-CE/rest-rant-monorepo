const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    let isValid = await bcrypt.compare(req.body.password, user.passwordDigest, () => {
        if (!user || isValid) {
            res.status(404).json({
                message: 'Username and/or password not found'
            })
        } else {
            res.json({ user })
        }
    })

})

module.exports = router