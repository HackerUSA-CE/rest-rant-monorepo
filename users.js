const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const passwordDigest = await bcrypt.hash(password, 10);

    const user = await User.create({
      ...rest,
      role: 'reviewer', // Set the role to 'reviewer'
      passwordDigest
    });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
