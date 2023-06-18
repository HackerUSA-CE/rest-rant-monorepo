const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.passwordDigest))) {
      res.status(404).json({
        message: 'Could not find a user with the provided email and password',
      });
    } else {
      res.json({ user });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while authenticating the user' });
  }
});

module.exports = router;
