const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function signup(req, res) {
  console.log("SECRET ", SECRET)
  const user = new User(req.body);
  try {
    await user.save();
    console.log('1');
    const token = createJWT(user);
    console.log('2');
    res.json({ token });
  } catch (err) {
    console.log(user);
    // Probably a duplicate email
    res.status(400).json(err);
  }
}


  /*--- helper functions ---*/

  function createJWT(user) {
    try {
      return jwt.sign(
        { user },
        SECRET,
        { expiresIn: '24h' }
      );
    } catch (err) {
      console.log(err);
    }
  }