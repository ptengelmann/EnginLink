const User = require('../models/User');

exports.signup = async (req, res) => {
  try {
    const { username, email, password, role, marketing } = req.body;

    // Check if user/email exists
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(400).json({ message: 'Username or email already in use' });
    }

    // Create user
    const newUser = new User({
      username,
      email,
      password,
      role,
      marketingConsent: marketing
    });

    await newUser.save();

    return res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during signup' });
  }
};
