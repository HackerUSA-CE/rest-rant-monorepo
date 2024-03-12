const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')           

router.post('/super-important-route', async (req, res) => {
    if(req.session.userId){
        console.log('Do the really super important thing')
        res.send('Done')
    } else {
        console.log('You are not authorized to do the super important thing')
        res.send('Denied')
    }
})


router.get('/profile', async (req, res) => {
    console.log(req.session.userId)
    try {
        // let user = await User.findOne({
        //     where: {
        //         userId: 
        //     }
        // })
        // res.json(user)
    } catch {
        res.json(null)
    }
})


router.get('/profile', async (req, res) => {
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
