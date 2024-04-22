const express = require("express");
const User = require("../models/user");

const login = (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with provided email exists
    const login = async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare provided password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid email or password" });
        }

        // If password is valid, generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h", // Token expires in 1 hour
        });

        res.status(200).json({ token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      }
    };

    // If password is valid, generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const signup = (req, res) => {
  try {
    const {
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
      idNumber,
      termsAccepted,
      privacyPolicyAccepted,
    } = req.body;

    // Create new user
    const newUser = new User({
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
      idNumber,
      termsAccepted,
      privacyPolicyAccepted,
    });
    const createUser = async () => {
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    };

    createUser();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login, signup };
