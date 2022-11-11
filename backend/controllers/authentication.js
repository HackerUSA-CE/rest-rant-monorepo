const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("json-web-token");

const { User } = db;

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  let user = await User.findOne({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.passwordDigest))) {
    res.status(404).json({
      message: `Could not find a user with the provided username and password`,
    });
  } else {
    const { value: token } = await jwt.encode(process.env.JWT_SECRET, {
      id: user.userId,
    });
    res.json({ user, token });
  }
});

router.get("/profile", async (req, res) => {
  try {
    const [authenticationMethod, token] = req.headers.authorization.split(" ");

    if (authenticationMethod == "Bearer") {
      const result = await jwt.decode(process.env.JWT_SECRET, token);
      const { id } = result.value;

      let user = await User.findOne({
        where: {
          userId: id,
        },
      });
      res.json(user);
    }
  } catch (e) {
    res.json(null);
  }
});

module.exports = router;
