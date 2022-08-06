const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

router.post('/', async (req, res) => {

    let user = await User.findOne ({
        where: { email: req.body.email }
    })

    console.log(user)
})

module.exports = router
