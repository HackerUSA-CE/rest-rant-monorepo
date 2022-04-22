const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const { User } = db


      
  
router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        console.log(user.userId)
        const result = jwt.sign(user.userId , process.env.JWT_SECRET)
            console.log(result)
            res.json({ user: user, token: result.value })
  
        
    }
})

router.get('/profile', async (req, res) => {
   
    try {
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        if(authenticationMethod == 'Bearer') {
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            const { id } = result.value
        }

        let user = await User.findOne({
            where: {
                userId:  id
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }

})



module.exports = router
