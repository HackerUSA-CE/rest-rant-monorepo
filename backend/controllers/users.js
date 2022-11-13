<<<<<<< HEAD
const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt') 
=======
const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
>>>>>>> 93f6dd34b221f889f45549874125044add540910

const { User } = db;

<<<<<<< HEAD
router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const user = await User.create({ 
        ...rest, 
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})
=======
router.post("/", async (req, res) => {
  let { password, ...rest } = req.body;
  const user = await User.create({
    ...rest,
    passwordDigest: await bcrypt.hash(password, 12),
  });
  res.json(user);
});
>>>>>>> 93f6dd34b221f889f45549874125044add540910

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
