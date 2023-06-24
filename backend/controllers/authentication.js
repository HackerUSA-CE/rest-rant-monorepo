const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

  
router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, uder.passwordDigest)) {
        res.status(404).json({
            message: `could not find user`
        })
    }else {
        res.json({user})
    }

    console.log(user)
})
  


module.exports = router
