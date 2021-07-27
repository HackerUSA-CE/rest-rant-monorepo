const router = require('express').Router()
const db = require("../models")

const { User } = db

router.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})


router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router