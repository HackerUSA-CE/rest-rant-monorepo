const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const { User } = db;

router.post("/", async (req, res) => {
    let { password, ...rest } = req.body;
    const user = await User.create({
        ...rest,
        passwordDigest: await bcrypt.hash(password, 10),
    });
    res.json(user);
});

router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

router.delete("/:userId", async (req, res) => {
    const user = await User.destroy({
        where: { userId: 2 },
    });
    res.status(200).json(user);
});

module.exports = router;