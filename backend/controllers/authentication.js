const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')           



// router.post('/', async (req, res) => {
//     console.log('IN HERE')
// })
   
router.post('/', async (req, res) => {
   
    let user = await User.findOne({
        where: { 
            userId: req.session.userId
        }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({
        message: `Could not find a user with the provided username and password` 
      })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })           
        res.json({ user: user, token: result.value })           
       }
    })

// router.get('/profile', async (req, res) => {
//     // console.log(req.session.userId)
//     try {
//         let user = await User.findOne({
//             where: {
//                 userId: __                    
//             }
//         })
//         res.json(user)
//     } catch {
//         res.json(null)
//     }
// })


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
