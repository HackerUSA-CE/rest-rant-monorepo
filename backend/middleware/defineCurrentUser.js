const db = require("../models")

const { User } = db;

async function defineCurrentUser(req, res, next) {
    let user = await User.findOne({
        where: {
            userId: req.session.userId
        }
    })
    req.currentUser = user
    next()
}

module.exports = defineCurrentUser