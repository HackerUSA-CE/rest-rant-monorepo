const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

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
      const token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET);
      res.json({ user, token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while authenticating the user' });
  }
});

router.get('/profile', async (req, res) => {
  try {
    // Split the authorization header into [ "Bearer", "TOKEN" ]:
    const [authenticationMethod, token] = req.headers.authorization.split(' ');

    // Only handle "Bearer" authorization for now
    // (we could add other authorization strategies later):
    if (authenticationMethod === 'Bearer') {
      try {
        // Verify and decode the JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get the logged-in user's id from the payload
        const { id } = decoded;

        // Find the user object using their id:
        const user = await User.findOne({
          where: {
            userId: id,
          },
        });

        res.json(user);
      } catch (error) {
        console.error('Error decoding JWT:', error);
        res.json(null);
      }
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error('Error splitting authorization header:', error);
    res.json(null);
  }
});

module.exports = router;
