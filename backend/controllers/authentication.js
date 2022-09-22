const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { response } = require('express')
const jwt = require('json-web-token');

const { User } = db

router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        const authResult = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        req.session.userId = user.userId;
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        res.json({ user })
    }
})

router.get('profile', async (req, res) => {

    try {
        let user = await User.findOne({
            where: {
                userId: '*'
            }
        });
        response.json(user);
    } catch {
        response.json(null);
    }
});

module.exports = router