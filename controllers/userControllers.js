const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

// Login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup controller
const signup = async (req, res) => {
  const { userName, email, phoneNumber, password, idNumber } = req.body;

  try {
    const user = await User.signup(
      userName,
      email,
      phoneNumber,
      idNumber,
      password
    );

    //create a token
    const token = createToken(user._id);

    res.status(200).json({
      userName,
      email,
      phoneNumber,
      idNumber,
      password,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, signup };
