<<<<<<< HEAD
const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
=======
const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt') 
>>>>>>> origin/9.3.4-solution

const { User } = db;

<<<<<<< HEAD
router.post("/", async (req, res) => {
  let { password, ...rest } = req.body;
  const user = await User.create({
    ...rest,
    passowordDigest: await bcrypt.hash(password, 10),
  });
  res.json(user);
});
=======
router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const user = await User.create({ 
        ...rest, 
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})
>>>>>>> origin/9.3.4-solution

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
